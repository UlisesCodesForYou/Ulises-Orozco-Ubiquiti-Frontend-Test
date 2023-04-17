## Ubiquiti Frontend Test

I created this project using NextJS, Typescript, TanStack Query (FKA React Query), and a component library named Mantine.

- Typescript has been added to reduce the risk of bugs. 
- NextJS was used to enable server-side rendering; improving SEO performance.
- TanStack Query was used to fetch data.  Please feel free to check out what TanStack can do by clicking [here](https://tanstack.com/query/v4/docs/react/overview).
- This app is also responsive.  Please feel free to check it out in different screen sizes. 


## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
# Ulises-Orozco-Ubiquiti-Frontend-Test
