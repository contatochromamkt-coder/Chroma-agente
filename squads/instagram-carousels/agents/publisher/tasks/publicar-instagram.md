---
task: "Publicar Conteúdo Aprovado no Instagram"
order: 1
input: |
  - slides: PNGs renderizados e aprovados da pasta output/slides/
  - caption_and_hashtags: Legenda e hashtags aprovadas vindas de carrossel-feed.md
output: |
  - preview: Bloco estruturado de PUBLISH PREVIEW com validações
  - dry_run_result: Resultado do dry-run (credenciais, upload, containers)
  - publish_result: Resultado final da publicação (sucesso com URL/ID, ou falha com detalhe)
---

# Publicar Conteúdo Aprovado no Instagram

Esta tarefa executa o fluxo completo de publicação no Instagram (@chroma_mkt) usando a skill `instagram-publisher`, sempre com dry-run antes de qualquer publicação real e confirmação explícita do usuário obrigatória.

## Process

1. **Reunir os arquivos aprovados.** Listar os PNGs em `output/slides/` em ordem numérica e extrair a legenda + hashtags de `carrossel-feed.md`.
2. **Validar contra os requisitos da plataforma.** Conferir: formato de imagem (converter PNG→JPEG se necessário, avisando o usuário antes), contagem de imagens (2-10), tamanho da legenda (máx. 2.200 caracteres), quantidade de hashtags.
3. **Apresentar o PUBLISH PREVIEW.** Mostrar plataforma, conta, lista de imagens com dimensões/formato, legenda com contagem de caracteres, hashtags e status de cada validação.
4. **Executar o dry-run.** Rodar o fluxo de publicação em modo de teste (`--dry-run`) via `instagram-publisher`: verificar credenciais, simular upload de imagens, simular criação de containers. Reportar o DRY-RUN RESULT.
5. **Pedir confirmação explícita.** Apresentar o resultado do dry-run e perguntar diretamente ao usuário se deseja publicar de verdade agora — nunca prosseguir sem resposta afirmativa explícita.
6. **Executar a publicação real (somente após confirmação).** Rodar o publish sem a flag de dry-run. Reportar o PUBLISH RESULT com URL do post, ID e timestamp em caso de sucesso, ou erro detalhado com sugestão de correção em caso de falha.
7. **Salvar o resultado completo** em `publish-result.md`, incluindo preview, dry-run e resultado final.

## Output Format

```yaml
preview:
  platform: "Instagram (carrossel)"
  account: "@chroma_mkt"
  images: 6
  caption_chars: 612
  hashtags_count: 5
  validation_status: "passed"
dry_run_result:
  credentials: "valid"
  images_uploaded: "6/6"
  containers_created: "6/6"
  status: "passed"
publish_result:
  status: "success | failed"
  post_url: "https://www.instagram.com/p/..."
  post_id: "..."
  published_at: "..."
  error: null
```

## Output Example

> Use como referência de qualidade, não como template rígido.

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

## Quality Criteria

- [ ] Preview foi apresentado com detalhes completos antes de qualquer ação de publicação
- [ ] Dry-run foi executado e reportado antes de qualquer publicação real
- [ ] Confirmação explícita do usuário foi obtida antes do publish real
- [ ] Resultado de sucesso inclui URL do post e ID; resultado de falha inclui erro detalhado e sugestão

## Veto Conditions

Reject and redo if ANY are true:
1. A publicação real foi executada sem confirmação explícita do usuário
2. O dry-run foi pulado antes da primeira tentativa de publicação real
3. Uma validação falhou (formato, contagem de imagens, tamanho de legenda) e a publicação prosseguiu mesmo assim
