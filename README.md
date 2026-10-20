# Brett Palmer — Portfolio

Personal portfolio for my software engineering, art, and music work. The site includes an introduction, professional experience, and a project gallery where visitors can switch between my Coding, Art, and Music work.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Updating the portfolio

- **Experience and project content:** edit the data in `src/screens/HomeScreen/HomeScreen.jsx`.
- **Project categories:** update the `codingProjects`, `artProjects`, and `musicProjects` arrays.
- **Project images:** place image assets in `src/assets/images/coding/`, `src/assets/images/art/`, or `src/assets/images/music/`, then import them in `HomeScreen.jsx`.
- **Project links:** set `sourceURL` and `linkIcon` on a project. Supported icon values are `github`, `linkedin`, and `youtube`. If either field is omitted, the project has no link icon or linked image.
- **Introduction, contact details, and navigation:** edit the components in `src/components/Intro/`, `src/components/Contact/`, and `src/components/Header/`.
- **Styles:** component styles are kept alongside their components in CSS or CSS modules; the home page layout styles are in `src/screens/HomeScreen/HomeScreen.css`.

## Tech stack

- React
- Vite
- React Router
- CSS Modules and standard CSS
