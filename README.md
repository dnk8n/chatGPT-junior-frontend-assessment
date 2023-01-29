# Take-Home Coding Assignment for Junior Frontend Software Developers

As a Senior Software Engineer and Senior Software Engineering Manager, we have devised the following take-home coding assignment for prospective junior frontend software developers:

## Assignment

Create a simple web application that allows users to search for and view information about different types of coffee. The application should have the following features:

- A search bar that allows users to search for coffee by name, origin, or roast level.
- A list of results that displays the name, origin, roast level, and a brief description of each coffee.
- A detail view that displays additional information about a selected coffee, such as flavor notes, brewing methods, and recommended pairings.

## Technical Requirements

- The application should be built using modern web development tools and frameworks, such as React, Angular, or Vue.js.
- The application should be responsive and accessible.
- The application should use a public API to retrieve and display information about coffee. The Open Coffee Database (OCD) API (https://opencoffeedb.com/)  is a great example of a public API that you can use.
- The application should be hosted on a platform such as GitHub Pages, Heroku or Firebase.
- The application should be live during the time of evaluation.

## Submission
- Provide a link to the hosted application.
- Include instructions for how to run the application locally.
- Include a brief summary of the technologies, libraries, and frameworks used.
- Add a few comments on the code.

## Evaluation Criteria

- The application should be functional and meet the requirements outlined above.
- The application should be well-designed and easy to use.
- The code should be clean, well-organized, and easy to read.
- The use of modern web development best practices will be considered.

We expect that this assignment will take 7-10 days to complete, at 1 hour per day. Please let us know if you have any questions or concerns.

___

# Vite + Deno + Vue 3 + TypeScript

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Running

You need to have Deno v1.28.0 or later installed to run this repo.

Start a dev server:

```
$ deno task dev
```

## Deploy

Build production assets:

```
$ deno task build
```

## Caveats

Currently there's a caveat for Deno users:

- peer dependencies need to be referenced in `vite.config.mts`. In this example
  it is only `vue` package that needs to be referenced.
