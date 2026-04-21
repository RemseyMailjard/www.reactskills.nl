# AGENTS.md

## Scope

This repository is a minimal Vite + React 19 + TypeScript app using Fluent UI React v9.
Keep agent changes small and local. There is no routing, no server code, and no test framework configured.

## Commands

- `npm run dev` starts the Vite dev server.
- `npm run build` runs `tsc -b` and then `vite build`.
- `npm run lint` runs ESLint with the flat config in `eslint.config.js`.
- `npm run preview` serves the production build.

## Project Shape

- `src/main.tsx` is the entry point. It mounts the app inside `StrictMode` and wraps it in `FluentProvider` with `webLightTheme`.
- `src/App.tsx` contains the current application UI and state. Start there for most feature changes.
- `public/` is for static assets.
- `README.md` contains the upstream Vite template notes. Link to it instead of duplicating those details.

## Working Conventions

- Prefer Fluent UI components before introducing custom HTML for common controls.
- Prefer component-local styling with `makeStyles` and `tokens` in TypeScript. Do not move UI styling into CSS unless the change is clearly global.
- Preserve the existing import order pattern: React, Fluent UI packages, local files.
- Use named function components and explicit TypeScript types when state can be `undefined`.
- Keep the current light theme unless the task is specifically about theming.

## Constraints

- TypeScript is strict enough to reject unused locals and parameters. Check `tsconfig.app.json` before adding placeholders or dead code.
- ESLint uses the flat config format, not `.eslintrc`.
- No tests are configured yet. Validate changes with the smallest available command, usually `npm run build` or `npm run lint`.

## Change Guidance

- For UI work, prefer extending `src/App.tsx` unless the component has become large enough to justify extraction.
- If you add new components, keep them in `src/` and follow the same Fluent UI and TypeScript patterns already used in `src/App.tsx`.
- If you introduce a new tool, architectural layer, or workflow, update this file so future agents can discover it quickly.