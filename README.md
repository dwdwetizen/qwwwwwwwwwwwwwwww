# LocalWay — Site institucional

Landing page e páginas de serviço da **LocalWay**, agência de presença digital para negócios locais.

O site é **100% front-end**: não há banco de dados, login nem backend. Todo o conteúdo é escrito diretamente no código, então ele pode ser hospedado em qualquer lugar que rode Node ou um runtime edge.

---

## 1. Rodando localmente

**Pré-requisitos:** Node.js 20+ (ou [Bun](https://bun.sh) 1.1+).

```bash
# com bun (recomendado)
bun install
bun run dev

# ou com npm
npm install
npm run dev
```

O servidor de desenvolvimento sobe em **http://localhost:8080** com recarregamento automático.

## 2. Scripts disponíveis

| Comando             | O que faz                                                |
| ------------------- | -------------------------------------------------------- |
| `bun run dev`       | Servidor de desenvolvimento com hot reload                |
| `bun run build`     | Gera a versão de produção                                 |
| `bun run build:dev` | Build em modo desenvolvimento (útil para depurar o build) |
| `bun run preview`   | Serve localmente o resultado do `build`                   |
| `bun run lint`      | Roda o ESLint                                             |
| `bun run format`    | Formata o código com Prettier                             |

## 3. Tecnologias

- **React 19**
- **TanStack Start / TanStack Router** — roteamento baseado em arquivos, com SSR
- **Vite 7** — build e dev server
- **Tailwind CSS v4** — estilos, configurados via CSS (`src/styles.css`), sem `tailwind.config.js`
- **shadcn/ui** (Radix UI) — componentes de interface
- **lucide-react** — ícones

## 4. Estrutura de pastas

```text
src/
  assets/                 ilustrações doodle, logo e imagens
  components/
    site/                 componentes do site
      SiteChrome.tsx      cabeçalho, rodapé, logo, botão flutuante de WhatsApp
      ServicePage.tsx     template usado por todas as páginas de serviço
      OtherServices.tsx   seção "Conheça outros serviços da LocalWay"
      servicesData.ts     dados dos serviços (cores, títulos, links, WhatsApp)
    ui/                   componentes shadcn/ui
    BeforeAfterSlider.tsx comparador "Sem LocalWay × Com LocalWay"
    ThemeToggle.tsx       alternância claro/escuro
  routes/                 uma página por arquivo (o nome do arquivo vira a URL)
    __root.tsx            layout raiz: <html>, fontes, providers
    index.tsx             Home  ->  /
    google-meu-negocio.tsx        ->  /google-meu-negocio
    criacao-de-sites.tsx          ->  /criacao-de-sites
    loja-virtual.tsx              ->  /loja-virtual
    trafego-pago.tsx              ->  /trafego-pago
  styles.css              cores, fontes, tokens e utilitários do design
  router.tsx              configuração do router
  routeTree.gen.ts        GERADO automaticamente — nunca edite à mão
```

## 5. Como editar as coisas mais comuns

### Número de WhatsApp e mensagem padrão

Estão no topo de `src/components/site/servicesData.ts`:

```ts
export const WHATSAPP_URL = "https://wa.me/5585994307699";
export const DIAGNOSTIC_MSG = "Olá! Quero receber o diagnóstico gratuito da LocalWay.";
```

Todos os botões do site usam essas duas constantes.

### Criar uma nova página de serviço

1. Adicione uma entrada em `SERVICES`, dentro de `src/components/site/servicesData.ts`
   (chave, URL, título, descrição curta, ícone, imagem e as classes Tailwind de cor).
   Use classes literais (`text-google-blue`), nunca strings montadas dinamicamente —
   o Tailwind precisa enxergar o nome completo da classe.
2. Crie o arquivo `src/routes/minha-pagina.tsx` copiando um dos serviços existentes
   (por exemplo `criacao-de-sites.tsx`) e ajuste o conteúdo. O nome do arquivo define a URL:

```tsx
export const Route = createFileRoute("/minha-pagina")({ ... });
```

A rota aparece automaticamente na seção "Conheça outros serviços" das demais páginas.

3. Se quiser o link no menu e no rodapé, adicione-o em `src/routes/index.tsx`
   (Home) e em `SiteChrome.tsx`.

### Cores, fontes e estilos

- **Cores e tokens:** `src/styles.css` — inclui as variáveis `--google-blue`, `--google-red`,
  `--google-yellow`, `--google-green`, `--google-purple`, além dos temas claro e escuro
  e dos utilitários `doodle-underline`, `paper-card`, `google-dots` e `font-hand`.
- **Fontes:** carregadas por uma tag `<link>` no `<head>` de `src/routes/__root.tsx`
  (Outfit para o texto e Caveat para os destaques manuscritos).
  No Tailwind v4 não use `@import` de URL remota dentro do CSS.

### Ilustrações

Ficam em `src/assets/` e são importadas como módulos:

```tsx
import heroImg from "@/assets/hero-localway.png";
```

Para trocar uma ilustração, substitua o arquivo mantendo o mesmo nome — nada mais precisa mudar.

## 6. SEO

Cada rota define seus próprios metadados no bloco `head()`:

```tsx
export const Route = createFileRoute("/criacao-de-sites")({
  head: () => ({
    meta: [
      { title: "Criação de Sites Profissionais em Fortaleza | LocalWay" },
      { name: "description", content: "..." },
      { property: "og:title", content: "..." },
      { property: "og:description", content: "..." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});
```

Regras: um `<h1>` por página, título com menos de 60 caracteres, descrição com menos de 160,
e `og:image` apenas na rota final (nunca no `__root.tsx`).

## 7. Deploy

```bash
bun run build
```

O build atual tem como alvo um runtime **edge (Cloudflare Workers)**. Opções de hospedagem:

- **Cloudflare Workers/Pages** — alvo padrão, funciona sem ajustes
- **Vercel** ou **Netlify** — detectam o projeto Vite/TanStack Start automaticamente
- **VPS próprio** — sirva a saída do build com Node

Não há variáveis de ambiente obrigatórias para o site rodar.

## 8. Exportando o código do Lovable

- **GitHub:** botão *GitHub → Connect to GitHub* no canto superior direito do editor.
  Cria um repositório com todo o projeto e mantém a sincronização nos dois sentidos.
- **ZIP:** menu do projeto (nome do projeto, canto superior esquerdo) → exportar/baixar código.

Depois de clonar, basta `bun install && bun run dev`.

---

© LocalWay
