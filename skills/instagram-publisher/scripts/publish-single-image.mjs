#!/usr/bin/env node
// Ad-hoc single-image Instagram publisher, reusing instagram-publisher's
// uploadToCloudinary. The shared publish.js hard-rejects <2 images
// (built for carousels), so this script creates a single-image media
// container directly instead of a CAROUSEL container.

import { uploadToCloudinary, getContainerStatus, publishMedia, getPermalink } from
  './publish.js';

const IG_BASE = 'https://graph.facebook.com/v21.0';

async function createSingleImageContainer(userId, imageUrl, caption, accessToken) {
  const params = new URLSearchParams({
    image_url: imageUrl,
    caption,
    access_token: accessToken,
  });
  const res = await fetch(`${IG_BASE}/${userId}/media?${params}`, { method: 'POST' });
  const text = await res.text();
  if (!res.ok) throw new Error(`createSingleImageContainer failed [${res.status}]: ${text}`);
  return JSON.parse(text).id;
}

async function pollUntilFinished(containerId, accessToken, timeoutMs = 60_000, intervalMs = 3_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const status = await getContainerStatus(containerId, accessToken);
    console.log(`   status: ${status}`);
    if (status === 'FINISHED') return;
    if (status === 'ERROR') throw new Error(`Container ${containerId} entered ERROR state`);
    await new Promise(r => setTimeout(r, intervalMs));
  }
  throw new Error(`Container ${containerId} timed out after ${timeoutMs}ms`);
}

async function main() {
  const imagePath = process.argv[2];
  const captionPath = process.argv[3];
  if (!imagePath || !captionPath) {
    throw new Error('Usage: node publish_single.mjs <image.jpg> <caption.txt>');
  }
  const caption = (await import('node:fs')).readFileSync(captionPath, 'utf-8');
  console.log(`Caption length: ${caption.length} chars`);
  if (caption.length > 2200) throw new Error(`Caption exceeds 2200 chars (got ${caption.length})`);

  const { INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USER_ID, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } = process.env;
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID || !CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
    throw new Error('Missing one of INSTAGRAM_ACCESS_TOKEN / INSTAGRAM_USER_ID / CLOUDINARY_CLOUD_NAME / CLOUDINARY_UPLOAD_PRESET');
  }

  console.log(`\n📸 Uploading ${imagePath} to Cloudinary...`);
  const imageUrl = await uploadToCloudinary(imagePath, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET);
  console.log(`   URL: ${imageUrl}`);

  console.log('\n📦 Creating single-image Instagram media container...');
  const containerId = await createSingleImageContainer(INSTAGRAM_USER_ID, imageUrl, caption, INSTAGRAM_ACCESS_TOKEN);
  console.log(`   Container ID: ${containerId}`);

  console.log('\n⏳ Waiting for container to finish processing...');
  await pollUntilFinished(containerId, INSTAGRAM_ACCESS_TOKEN);
  console.log('   Container ready.');

  console.log('\n🚀 Publishing to Instagram...');
  const postId = await publishMedia(INSTAGRAM_USER_ID, containerId, INSTAGRAM_ACCESS_TOKEN);
  const permalink = await getPermalink(postId, INSTAGRAM_ACCESS_TOKEN);
  console.log(`\n✅ Published successfully!`);
  console.log(`   Post ID: ${postId}`);
  if (permalink) console.log(`   URL: ${permalink}`);
}

main().catch(err => {
  console.error(`\n❌ ${err.message}`);
  process.exit(1);
});
