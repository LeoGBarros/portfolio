# Portfolio — Leonardo Barros

Portfólio pessoal em Next.js 16 (App Router), com versões em inglês e português.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção (inclui checagem de tipos)
```

## Estrutura

| Caminho | O que é |
|---|---|
| `app/[lang]/` | Rotas por idioma (`/en`, `/pt`); `layout.tsx` é o layout raiz |
| `content/en.ts`, `content/pt.ts` | Todo o texto do site; `pt.ts` é tipado pelo formato de `en.ts` |
| `components/` | Seções da página e componentes interativos (header, contador, texto rotativo) |
| `proxy.ts` | Redireciona `/` para o idioma do cookie ou do navegador |
| `app/globals.css` | Tema cyberpunk (tokens em `:root`) |

Para mudar um texto, edite os dois arquivos em `content/`. Esquecer uma chave em `pt.ts`
quebra o build.

## Deploy

Pensado para a Vercel. Defina `SITE_URL` (ex.: `https://seudominio.dev`) para as URLs
absolutas de Open Graph; sem ela, usa o domínio de produção da Vercel.
