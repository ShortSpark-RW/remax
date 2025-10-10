## Quick context for AI coding agents

Small React app (Vite) implementing a real-estate theme. Key tech: React 19, Vite, TailwindCSS, Framer Motion, Formik + Yup, react-router-dom, i18next. No backend/API is wired — mock data lives in `src/data/sampleData.js`.

## Big-picture architecture
- Entry: `src/main.jsx` (imports `./i18n/i18n` then renders `App`).
- Router: `src/App.jsx` defines client routes. Main pages:
  - `/` -> `src/pages/Home.jsx`
  - `/list-layout` and `/properties` -> `src/pages/ListLayout.jsx`
  - `/property/:id` -> `src/pages/SingleProperty.jsx`
- UI is component-driven under `src/components/` (e.g. `PropertyCard.jsx`, `AgentCard.jsx`, `Header.jsx`, `Footer.jsx`). Many components accept `className` and `index` (used for framer-motion stagger/delay).
- Styling: Tailwind utilities in `index.css` and `tailwind.config.js`. Avoid adding global CSS unless necessary.

## Developer workflows (explicit)
- Install: `npm install` (project uses npm + Vite). See `package.json`.
- Dev server: `npm run dev` (Vite dev server, default port 5173). Hot reload available.
- Build: `npm run build` then `npm run preview` to locally preview the production bundle.
- Lint: `npm run lint` runs ESLint configured via the dev deps.

## Project-specific conventions and patterns
- Mock data source: Use `src/data/sampleData.js` to seed UI. When adding features that rely on data, check and extend this file rather than adding ephemeral constants across components.
- Forms: Form handling uses Formik + Yup and central schemas live in `src/utils/validationSchemas.js`. Follow existing schema shapes and error render patterns when adding new forms.
- Animations: Components use `framer-motion` for entrance/hover animations. Many components expect an `index` prop for staggered delays — keep that when rendering lists (see `Home.jsx` and `ListLayout.jsx`).
- Routing: Uses `react-router-dom` v7-style Routes/Route (see `App.jsx`). Use `Link` from `react-router-dom` for internal navigation (see `PropertyCard.jsx` linking to `/property/${id}`).
- i18n: `src/i18n/i18n.js` uses `i18next-http-backend` loading translations from `/locales/{{lng}}/{{ns}}.json` (public/locales). `LanguageSwitcher.jsx` toggles language and sets `document.documentElement.dir` for RTL (`ar`). Update `public/locales/*/translation.json` for copy changes.
- Assets: Static images and localized json are in `public/` (see `public/locales`). Imported assets (logos/backgrounds) live in `src/assets/`.

## Integration & external dependencies to be aware of
- No external API endpoints are configured. The AI/chat widget (`src/components/AIChatButton.jsx`) is a local simulated UI that does not call external LLMs. If integrating a service, add a thin service module under `src/services/` and provide configuration via environment variables.
- Icons: `lucide-react` is used across components.

## Files to inspect for common change patterns (examples)
- Routing & entry: `src/main.jsx`, `src/App.jsx`
- Mock data: `src/data/sampleData.js` (properties/agents/types)
- Component patterns: `src/components/PropertyCard.jsx`, `AgentCard.jsx`, `Header.jsx`, `Footer.jsx`
- Forms & validation: `src/components/ContactForm.jsx`, `src/components/SearchForm.jsx`, `src/utils/validationSchemas.js`
- i18n: `src/i18n/i18n.js`, `public/locales/*/translation.json`, `src/components/LanguageSwitcher.jsx`

## Practical tips for changes an AI agent might make
- Prefer adding new pages/components under `src/pages/` or `src/components/` and keep filenames PascalCase (existing convention).
- When modifying lists/grids, preserve `index` prop usage for consistent animation delays.
- For text changes, update `public/locales/*/translation.json` instead of hard-coding copy in components when the string is user-facing.
- Avoid introducing runtime server-side code: app is client-only and expects browser globals (document/window).
- If adding network calls, centralize them in a new `src/services/` file and stub/mock data in `src/data/sampleData.js` for dev.

## What I will NOT change automatically
- I will not change build tooling (Vite, package.json scripts) without explicit instruction.
- I will not wire external API keys or secrets; add config placeholders and document required env vars instead.

If anything above is unclear or you want more examples (for instance, the exact JSON keys in `sampleData.js` or the validation schema shapes in `src/utils/validationSchemas.js`), tell me which area to expand and I will iterate.
