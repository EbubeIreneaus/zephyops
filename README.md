# ZephyOps Website (scaffold)

Local development

```bash
npm install
npm run dev
```

What I added
- Global CSS with brand colors in `assets/main.css`
 - Tailwind CSS v4 configured with `tailwind.config.cjs` and `postcss.config.cjs`
- Header and Footer components in `components/`
- Pages: `index.vue`, `services.vue`, `about.vue`, `contact.vue`, `blog.vue`
- Updated `nuxt.config.ts` to include metadata and global CSS

Next steps
- Logo image at `public/logo.png`
- Replace `public/logo.png` with your actual logo
- Provide brand fonts and imagery to refine styling
- Hook the contact form to an endpoint or form service
# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
