## Astro <3 Drupal

An Astro site that pulls Drupal content via JSON:API. Cool! The best of both worlds.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

#### Working locally with Drupal
Astro has a great guide on [getting started with using Drupal content in your Astro site](https://docs.astro.build/en/guides/cms/drupal/#integrating-drupal-with-astro). For newer Node developers (couldn't be me) there may be a few bumps in the road not covered in the Astro docs. One of my first issues was a dreaded `UNABLE_TO_VERIFY_LEAF_SIGNATURE` error. I tried many workarounds including trying to copy the ddev certificate into astro and setting up the middleware to inject the cert. Since this is built locally only, disabling the SSL verification in Node was the easier route. Obviously not the best solution working non-locally but it let me move forward.

`NODE_TLS_REJECT_UNAUTHORIZED=0 npm start`
