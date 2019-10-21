# Sapper and Tailwind Template (+ IE minimlal support)

Boilerplate template for Sappert + Tailwind with some minimal support of IE

```bash
npm install # or yarn!
npm run watch:tailwind # in a separate terminal window
npm run dev # in a separate terminal window
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

## Thanks

Inspired by:
*  Greate Sapper template [from Yarrney](https://github.com/Yarrney/sapper-tailwind-firebase-host)
*  The [sapper.svelte.dev](https://sapper.svelte.dev) project.

## IE minimal support

As Sapper doesn't support legacy browsers, like IE, the main goal of that minimal support is to provide good-looking "static" website for that users who use IE.

To achieve this the following changes were done:
1. Polifill.io integration
2. shimport@ hot fix was applied

As a result, there are no any javascript errors when visitors browse Sapper with IE. They can use navigation and see all content which is generated with SSR.
