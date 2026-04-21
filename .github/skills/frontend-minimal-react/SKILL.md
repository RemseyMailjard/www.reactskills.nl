---
name: frontend-minimal-react
description: Use for UI changes in this repo's minimal Vite + React + TypeScript + Fluent UI app. Keywords: Fluent UI, makeStyles, tokens, small React app, minimal frontend, App.tsx, component extraction.
---

Use this skill when working on frontend changes in this repository.

## Purpose

Help agents make focused UI updates without over-engineering a deliberately small React application.

## Project Pattern

- The app is a minimal Vite + React 19 + TypeScript project.
- `src/main.tsx` handles bootstrap and wraps the app with `FluentProvider` and `webLightTheme`.
- `src/App.tsx` is the primary implementation surface for current UI behavior.
- Fluent UI v9 is the default component and styling system.

## Working Rules

- Prefer modifying `src/App.tsx` first.
- Extract a new component only when the existing file would otherwise become hard to read.
- Prefer Fluent UI components before custom HTML controls.
- Prefer `makeStyles` and `tokens` in TypeScript before editing CSS files.
- Keep TypeScript explicit where state may be `undefined`.
- Preserve the current import grouping style: React, external packages, then local files.

## Avoid

- Do not add routing, global state, or reusable abstractions unless the task actually needs them.
- Do not move styles into CSS just to mirror patterns from other projects.
- Do not add placeholder variables or unused parameters because strict TS settings reject them.

## Validation

- Use `npm run build` for end-to-end compile validation.
- Use `npm run lint` for style and static checks.
- No automated tests are configured, so prefer the smallest executable validation that matches the change.

## References

- [AGENTS.md](../../../AGENTS.md)
- [.github/copilot-instructions.md](../../copilot-instructions.md)
- [README.md](../../../README.md)