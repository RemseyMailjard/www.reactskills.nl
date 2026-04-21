# GitHub Copilot Instructions

Use [AGENTS.md](../AGENTS.md) as the primary source of repository guidance.
Use [README.md](../README.md) for upstream Vite template details instead of repeating them in responses or edits.

## Repo Priorities

- Keep changes minimal and local. This app is intentionally small.
- Start UI changes in `src/App.tsx` unless the file has clearly outgrown a single-component structure.
- Preserve the existing Fluent UI approach: prefer `@fluentui/react-components`, `makeStyles`, and `tokens` over custom markup and ad hoc CSS.
- Keep `src/main.tsx` responsible for app bootstrap and the `FluentProvider`.

## Copilot Behavior

- Before proposing extra structure, check whether the current single-screen app actually needs it.
- Prefer extending existing patterns over introducing new abstractions, global state, routing, or utility layers.
- When adding state, use explicit TypeScript types where `undefined` is possible.
- Keep imports grouped in the current style: React, external UI packages, then local files.
- Treat `npm run build` and `npm run lint` as the default validation commands because no test runner is configured.

## Avoid

- Do not duplicate guidance already documented in [AGENTS.md](../AGENTS.md).
- Do not move component styling into CSS files unless the change is clearly global.
- Do not add placeholder code that will fail strict TypeScript checks for unused locals or parameters.