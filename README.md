# Minimal TypeScript

Bootstrap a minimal TypeScript setup.

```bash
npm i -y
mkdir test src dist
npm i -D typescript ts-node @types/node
npm i -D mocha @types/mocha
npx tsc --init
```
In `tsconfig.json` set `lib` and `target` to `ES2020`, set
`outDir` to `./dist` and `rootDir` to `./src`.

Add npm scripts
```javascript
  "scripts": {
    "build": "tsc --build",
    "start": "node ./dist",
    "start:src": "ts-node ./src",
    "test": "mocha -r ts-node/register src/**/*.spec.ts -w --watch-files src"
  }
```

And you're off!