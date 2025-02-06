# @openlayers/codemod

Automated code modifications to assist with OpenLayers upgrades.

## replace-barrel-imports

Rewrite imports from ["barrel files"](https://www.google.com/search?q=barrel+files).

```bash
# rewrite imports in all .js and .mjs files in the path/to/files directory
npx @openlayers/codemod@latest replace-barrel-imports path/to/files
```

See additional options with the `help` command (or `--help` flag).

```bash
# see options for the command
npx @openlayers/codemod@latest help replace-barrel-imports
```

## Development

Run tests with `npm test`. Debug the tests with `npx vitest --inspect-brk --no-file-parallelism` (then visit `chrome://inspect/#devices`).

To run the codemod directly from this repo, so something like `node ./codemod.js replace-barrel-imports --consider-relative-paths ../path/to/other/files`.
