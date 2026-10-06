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
| `fundo-padrao*.png` | Fundo da conversa (tema claro e escuro) |
| `plano-destaque.webp` | Arte da coluna da esquerda no desktop (trocar todo mês) |

## Publicar no GitHub Pages

1. Envie todos os arquivos desta pasta para a raiz do repositório.
2. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`.
3. A página fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/` (HTTPS, necessário para notificações e instalação do app).

## Para editar

- **Mensagens prontas:** lista `RESPOSTAS` no script do final do `index.html`.
- **Telefone e site:** bloco `<aside class="destaque">` no início do `<body>`.
- **Cor principal:** variável `--chat-cor` no começo do CSS.
- **Arte do mês:** substitua `plano-destaque.webp` mantendo a proporção 9:16 (1080x1920).
- **Diagnóstico:** abra a página com `?debug` no final do endereço.
