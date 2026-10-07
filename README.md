# DbChat

Página de atendimento da DBNET com o webchat do Opa Suite.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página inteira (layout, estilos e scripts) |
| `manifest.webmanifest` | Dados do app instalável (nome **DbChat**, cores, ícones) |
| `sw.js` | Service worker (instalação do app e notificações) |
| `icon-*.png` | Ícones do app |
| `logo.png` | Logo usado no cabeçalho do chat e nos popups |
| `fundo-doodle*.webp` | Fundo da conversa (tema claro e escuro) |
| `anuncio-*.webp` | Anúncios da coluna da esquerda (quadrados 1080x1080; trocar quando mudar a campanha) |

## Publicar no GitHub Pages

1. Envie todos os arquivos desta pasta para a raiz do repositório.
2. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`.
3. A página fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/` (HTTPS, necessário para notificações e instalação do app).

## Para editar

- **Mensagens prontas:** lista `RESPOSTAS` no script do final do `index.html`.
- **Telefone e site:** bloco `<aside class="destaque">` no início do `<body>`.
- **Cor principal:** variável `--chat-cor` no começo do CSS.
- **Anúncios:** substitua `anuncio-outubro.webp` e `anuncio-cachorro.webp` mantendo a proporção quadrada (1080x1080), ou ajuste as tags `<img class="anuncio">` no `index.html`.
- **Diagnóstico:** abra a página com `?debug` no final do endereço.
