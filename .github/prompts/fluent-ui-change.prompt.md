---
mode: agent
description: Make a focused Fluent UI change in this minimal React app without adding unnecessary structure.
---

Use [AGENTS.md](../../AGENTS.md) and [.github/copilot-instructions.md](../copilot-instructions.md) as the primary repository guidance.

Apply the user's request to this repository with these constraints:

- Start from `src/App.tsx` unless the change clearly belongs in `src/main.tsx` or a new small component.
- Prefer `@fluentui/react-components`, `makeStyles`, and `tokens` over custom HTML and ad hoc CSS.
- Keep the implementation lean. Do not introduce routing, global state, utility layers, or new folders unless the request requires them.
- If a new component is justified, keep it in `src/` and follow the same patterns already used in the app.
- Preserve the existing light Fluent theme unless the request is specifically about theming.
- Validate with the smallest useful command, usually `npm run build` or `npm run lint`.

When you respond:

1. Make the change directly when possible.
2. Briefly state what changed and how it was validated.
3. Keep explanations short and implementation-focused.