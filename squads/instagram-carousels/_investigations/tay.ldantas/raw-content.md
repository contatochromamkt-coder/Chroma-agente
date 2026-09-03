# Raw Content: @tay.ldantas (Instagram)

Investigated: 2026-09-02
Total contents analyzed: 3
Content types: Carousel, Reel, Reel

**Methodology note:** The logged-out Instagram web session used for this investigation exhibited unstable behavior — after several seconds on a page (profile grid or post modal), it repeatedly auto-redirected to unrelated third-party profiles/reels (e.g. @pedrosobral, @priscila_zillo) that have no connection to @tay.ldantas. This is consistent with Instagram's logged-out "suggested content" autoplay/redirect behavior for unauthenticated sessions, not a login wall in the strict sense (no "log in to see more" block appeared — content loaded and was readable). To work around it, each target URL was navigated to directly and data was captured immediately via a JS evaluate call before the redirect occurred. This succeeded for the profile grid and all 3 posts' captions/dates/metrics. It did **not** allow full carousel slide-by-slide paging (clicking "Avançar" through slides) for Content 1, since the redirect occurred before that interaction could complete. All data below is real, extracted directly from the pages — nothing is fabricated.

Profile stats at time of investigation: 1,196,345 followers ("1,1 mi"), 5,223 following. Bio: "Founder CEO @vinci.society Consultoria e agência que constrói as marcas + sexy e ricas dessa geração e das próximas". Link in bio: vinci.site/aplicacao-tay-bio.

---

## Content 1: [Carousel: 2+ slides | branding/agency positioning]
**Date:** October 1, 2025 (posted "47 sem" / 47 weeks before investigation)
**Metrics:** 9,9 mil curtidas (~9,900 likes), 298 comentários
**URL:** https://www.instagram.com/tay.ldantas/p/DPRf3EwDU-0/

### Caption
Construir as marcas mais sexys e ricas dessa geração e das próximas. Pode anotar, ainda seremos a empresa com as melhores soluções de branding e revenue do mundo.

### Slide 1
[Visual only — no text overlay captured. Alt text only described it generically as "Photo by Tay Dantas on October 01, 2025" with no OCR'd text, unlike other slides on the profile grid which typically get auto-generated alt text describing on-image text.]

### Slide 2
[Visual — a photo tagging 4 accounts: @bcarnelli, @hgdavinci, @lpambrosio, @vinci.society. Likely a team/agency photo. No text overlay content was captured before the session redirected away.]

### Slides 3+
Not captured — the carousel could not be fully paged through before the browser session auto-redirected to an unrelated profile. Only 2 of an unknown total number of slides were observed.

---

## Content 2: [Reel]
**Date:** January 10, 2025
**Metrics:** 67 mil (~67,000 views/plays), 513 comentários
**URL:** https://www.instagram.com/tay.ldantas/reel/DEqKIE8P3He/

### Caption
A Ruptura será sua maior oportunidade se você se inscrever no link da bio 🤓

### Transcription
Transcription unavailable — yt-dlp and ffmpeg are not installed in this environment (`yt-dlp --version` and `ffmpeg -version` both returned "command not found"). Caption only, as noted above.

---

## Content 3: [Reel]
**Date:** September 1, 2026 (posted "22 h" / 22 hours before investigation — most recent post on the profile)
**Metrics:** 58 comentários (like count not displayed on page — Instagram sometimes withholds exact like counts on very recent posts for logged-out viewers)
**URL:** https://www.instagram.com/tay.ldantas/reel/Dcv8X1mR4Jm/

### Caption
Vc já teve isso? Comparar algo tão bonito que te de vontade de trocar todas as outras coisas mais feias ou que não combinem com essa coisa? Isso se chama efeito Diderot

### Transcription
Transcription unavailable — yt-dlp and ffmpeg are not installed in this environment. Caption only.

Sample of real audience comments on this post (for tone/engagement reference only, not analyzed as content): "amo gente intelectual", "sobre vida, repertório, comunicação e também marketing, fantástica sua análise", "Tay tu é foda!".

---
