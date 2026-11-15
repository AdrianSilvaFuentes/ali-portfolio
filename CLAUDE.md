# ali-portfolio

Personal portfolio site of Adrián Silva Fuentes ("Ali"), Product Design Engineer.
Built with the components of ali-ui (the design system in the sibling folder `../ali-ui`).
Direction: original, editorial, lean.

## How to talk to me

- Reply in Brazilian Portuguese, in plain language. I am a designer who builds with AI and does not write code by hand.
- After each task, explain in 2-3 sentences what changed and why.
- Ask before big decisions (new dependency, folder restructure, deleting files).

## Stack

Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS 4, Biome, pnpm.
Components and tokens come from npm: `@adriansilvafuentes/ui` and `@adriansilvafuentes/tokens`.
A component change happens in ali-ui, gets a new version on npm, and only then is updated here.

## Rules

- **Nothing from Nuvia.** No screens, flows, docs, internal product names or metrics. Job title and period may appear on the timeline, only after I confirm.
- **No phone number** anywhere. The public e-mail stays a placeholder until I choose one.
- **Semantic tokens only.** Never hardcode colors, font sizes, spacing, radii or shadows, and never import `@adriansilvafuentes/tokens/primitives` (Biome blocks both). The yellow accent is a fill, never text or border on a light background.
- **Accessibility:** AA contrast in light and dark themes, touch targets of at least 44px, visible focus, semantic HTML, menu and language selector usable by keyboard.
- **Responsive from the start** (mobile first), light and dark themes derived from the tokens.
- Interactive Radix components need `"use client"`. Prefer server components.
- **All text lives in content files** (`src/content/pt.ts`, `en.ts`, `es.ts`), never inside components. Portuguese is the source language; EN and ES translations are marked `REVISAR` for my review.
- **Languages and addresses** live in `src/i18n/config.ts`: routes are prefixed (`/pt`, `/en`, `/es`) and page slugs are translated (`/pt/trabalho`, `/en/work`, `/es/trabajo`). A new page needs its slug in all three languages there. `src/proxy.ts` sends addresses without a language to the browser's language (PT, ES, otherwise EN).
- Never invent final content. Text in `[brackets]` is a visible placeholder.
- No gradients, heavy shadows, large rounded corners or emoji icons unless I ask. Avoid the generic AI-generated look.

## Workflow

- Before saying a task is done, run `pnpm check` (Biome + types) and `pnpm build`, and take one screenshot to check it visually.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
- Never commit directly to `main`. Every task gets its own branch and reaches `main` only through a pull request.
- A pull request is merged only after I approve its Vercel preview.
- Never push without asking me first.
- Never commit `.env`, secrets, or macOS junk files (`.DS_Store`, `._*`).

## Boundaries

- This repository is public. Planning material that mentions pending authorizations or personal data stays outside it, in `../portfolio-handoff/`.
- The repository lives on an external disk. Keep the pnpm store inside the project folder.
- Original photos and media go in `media/` (ignored by Git, never committed). Only optimized versions for the site go in `public/images/`.
