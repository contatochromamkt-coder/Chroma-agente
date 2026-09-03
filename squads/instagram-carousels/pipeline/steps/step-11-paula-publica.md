---
execution: subagent
agent: publisher
inputFile: squads/instagram-carousels/output/carrossel-feed.md
outputFile: squads/instagram-carousels/output/publish-result.md
model_tier: powerful
---

# Step 11: Paula Publica — Publicar no Instagram

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/carrossel-feed.md` — legenda e hashtags aprovadas
- `squads/instagram-carousels/output/slides/` — PNGs renderizados e aprovados por Diana Design e Vera Veredito
- Best-practices `social-networks-publishing.md` — workflow completo de validação, dry-run e confirmação

## Instructions

### Process

1. Listar os PNGs em `output/slides/` em ordem numérica e extrair a legenda + hashtags de `carrossel-feed.md`.
2. Validar contra os requisitos da plataforma: formato de imagem (converter PNG→JPEG se necessário, avisando o usuário antes), contagem de imagens (2-10), tamanho da legenda (máx. 2.200 caracteres).
3. Apresentar o PUBLISH PREVIEW estruturado (plataforma, conta, imagens, legenda com contagem de caracteres, hashtags, status de validação).
4. Executar o dry-run via skill `instagram-publisher` (`--dry-run`) e reportar o DRY-RUN RESULT.
5. Pedir confirmação explícita ao usuário antes de qualquer publicação real — nunca prosseguir sem resposta afirmativa direta.
6. Executar a publicação real somente após confirmação, reportando o PUBLISH RESULT (URL, ID, timestamp em caso de sucesso; erro detalhado e sugestão em caso de falha).
7. Salvar o resultado completo em `squads/instagram-carousels/output/publish-result.md`.

## Output Format

The output MUST follow this exact structure:
```
PUBLISH PREVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Plataforma: Instagram (carrossel)
Conta:      @chroma_mkt
Imagens:    [N] slides — [lista com dimensões/formato]
Legenda:    [X] / 2.200 caracteres
Hashtags:   [N] ([lista])
Status:     [validação passou/falhou]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DRY-RUN RESULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Credenciais: [válidas/inválidas]
Upload de imagens: [N/N]
Containers de mídia: [N/N]
Publicação: pulada (modo dry-run)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Confirmação explícita do usuário obtida aqui]

PUBLISH RESULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Publicado com sucesso / Falhou]
Post URL:   [...]
Post ID:    [...]
Publicado:  [timestamp]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Output Example

```
PUBLISH PREVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Plataforma: Instagram (carrossel)
Conta:      @chroma_mkt
Imagens:    6 slides — todas 1080x1440, JPEG, validadas
Legenda:    612 / 2.200 caracteres
Hashtags:   5 (#marketingdigital #gestaoderedessociais #estrategiadigital #chromamkt #marketingparapmes)
Status:     Todas as validações passaram. Pronto para dry-run.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DRY-RUN RESULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Credenciais: válidas (token expira em 2026-11-01)
Upload de imagens: 6/6 enviadas ao Cloudinary
Containers de mídia: 6/6 criados
Container do carrossel: criado com sucesso
Publicação: pulada (modo dry-run)

Dry-run passou. Aguardando confirmação para publicar de verdade.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Usuário confirma: "pode publicar"]

PUBLISH RESULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Publicado com sucesso
Plataforma:  Instagram
Post URL:    https://www.instagram.com/p/CxYz123abc/
Post ID:     17912345678901234
Publicado:   2026-09-02 15:04:12 UTC
Rate limit:  3/25 posts usados nas últimas 24h
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. A publicação real foi executada sem confirmação explícita do usuário
2. O dry-run foi pulado antes da primeira tentativa de publicação real

## Quality Criteria

- [ ] Preview foi apresentado com detalhes completos antes de qualquer ação de publicação
- [ ] Dry-run foi executado e reportado antes de qualquer publicação real
- [ ] Resultado de sucesso inclui URL do post e ID; resultado de falha inclui erro detalhado
