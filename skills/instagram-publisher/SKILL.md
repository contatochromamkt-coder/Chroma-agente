---
name: instagram-publisher
description: >
  Publishes Instagram carousel posts from local images.
  Uploads images to Cloudinary (requires cloud name + unsigned upload preset) for
  public hosting, creates Instagram media containers via the Graph API, and
  publishes the carousel. Supports 2-10 images per post and retrieves the real
  post permalink.
description_pt-BR: >
  Publica carrosséis do Instagram a partir de imagens locais.
  Faz upload das imagens para o Cloudinary (requer cloud name + upload preset
  não-assinado) como hospedagem pública, cria containers de mídia via Graph API
  e publica o carrossel. Suporta de 2 a 10 imagens por post e obtém o permalink real.
description_es: >
  Publica carruseles de Instagram a partir de imágenes locales.
  Sube las imágenes a Cloudinary (requiere cloud name + upload preset no firmado)
  como hosting público, crea contenedores de medios vía Graph API y publica el
  carrusel. Soporta de 2 a 10 imágenes por post y obtiene el permalink real.
type: script
version: "2.0.0"
script:
  path: scripts/publish.js
  runtime: node
  invoke: "node --env-file=.env {skill_path}/scripts/publish.js --images \"{images}\" --caption \"{caption}\""
env:
  - INSTAGRAM_ACCESS_TOKEN
  - INSTAGRAM_USER_ID
  - CLOUDINARY_CLOUD_NAME
  - CLOUDINARY_UPLOAD_PRESET
categories: [social-media, publishing, instagram]
---

# Instagram Publisher

## When to use

Use the Instagram Publisher when you need to publish carousel posts directly to an Instagram Business account. This skill handles the full workflow: uploading images to Cloudinary (a free account works — see Setup below), creating Instagram media containers via the Graph API, and publishing the carousel. It supports 2-10 JPEG images per post.

**Why Cloudinary instead of imgBB:** imgBB was the original image host for this skill, but Meta's Graph API media fetcher was unable to reliably retrieve images hosted there (recurring error 9004/2207052 "can't fetch media"), even when the imgBB URLs were directly reachable from elsewhere. Cloudinary is widely used in production with the Instagram Graph API and does not have this issue.


## Instructions

### Workflow

1. List JPEG files in `squads/{squad}/output/images/` sorted by name.
   If no files found: stop and ask the user to add images before continuing.
2. Present the image list to the user with AskUserQuestion to confirm order.
3. Extract the caption from the content draft:
   - Use the hook slide text + CTA slide text
   - Max 2200 characters (Instagram limit)
4. Run the publish script:
   ```
   node --env-file=.env squads/{squad}/tools/publish.js \
     --images "<comma-separated-ordered-paths>" \
     --caption "<caption>"
   ```
   Add `--dry-run` to test the full flow without actually publishing.
5. On success: save the post URL and post ID to the step output file.
6. On failure: display the error and ask the user how to proceed.

### Constraints

- Images: JPEG only, 2-10 per carousel
- Caption: max 2200 characters
- Requires Instagram Business account (not Personal or Creator)
- Rate limit: 25 API-published posts per 24 hours

### Setup (first-time)

Copy `.env.example` to `.env` and fill in the four required variables:

```
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_USER_ID=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_UPLOAD_PRESET=
```

#### CLOUDINARY_CLOUD_NAME / CLOUDINARY_UPLOAD_PRESET

1. Crie uma conta gratuita em [cloudinary.com](https://cloudinary.com/) (o plano free cobre bastante volume para posts de Instagram)
2. No Dashboard, copie o **Cloud Name** (aparece no topo) — isso é `CLOUDINARY_CLOUD_NAME`
3. Vá em **Settings → Upload → Upload presets → Add upload preset**
4. Defina **Signing Mode: Unsigned** (permite upload direto sem expor a API secret) e salve
5. Copie o nome do preset criado — isso é `CLOUDINARY_UPLOAD_PRESET`

Nenhum dos dois valores é secreto no sentido estrito (um upload preset "unsigned" é desenhado para ser usado do lado do cliente), mas ainda assim mantenha-os em `.env` / variáveis de ambiente, não hardcoded.

#### INSTAGRAM_ACCESS_TOKEN

Pré-requisito: conta Instagram Business conectada a uma Página do Facebook, e um app criado em [developers.facebook.com](https://developers.facebook.com/) (tipo: **Empresa**).

**Para obter um token de longa duração (válido 60 dias):**

1. Acesse seu app → **Graph API Explorer**
2. No dropdown do topo, selecione seu app
3. Clique em **"Gerar token de acesso"**
4. Ative as permissões:
   - `instagram_content_publish`
   - `instagram_basic`
   - `pages_read_engagement`
5. Clique em **"Gerar token de acesso"** e autorize — você receberá um token de curta duração (1h)
6. Converta para longa duração (60 dias) com este GET:
   ```
   https://graph.facebook.com/oauth/access_token
     ?grant_type=fb_exchange_token
     &client_id={APP_ID}
     &client_secret={APP_SECRET}
     &fb_exchange_token={TOKEN_CURTO}
   ```
   _(APP_ID e APP_SECRET: seu app → Configurações → Básico)_
7. Copie o `access_token` da resposta e cole em `.env`

> O token expira em 60 dias. Repita o processo para renovar.

#### INSTAGRAM_USER_ID

1. No Graph API Explorer (com o token acima), faça GET em:
   ```
   /me/accounts
   ```
2. Localize sua **Página do Facebook** na resposta e anote o `id`
3. Faça GET em:
   ```
   /{page-id}?fields=instagram_business_account
   ```
4. Copie o `id` dentro de `instagram_business_account` — esse é o seu User ID

## Available operations

- **Publish Carousel** -- Upload images and publish a carousel post to Instagram
- **Dry Run** -- Test the full publishing flow without actually posting (use `--dry-run` flag)
- **Image Upload** -- Upload local JPEG images to Cloudinary (requires cloud name + unsigned upload preset)
- **Status Check** -- Monitor media container processing status before publishing
