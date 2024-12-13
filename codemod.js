#!/usr/bin/env node
const path = require('node:path');
const {Command} = require('commander');
const {run: jscodeshift} = require('jscodeshift/src/Runner');
const pkg = require('./package.json');

const program = new Command();
program
  .name('codemod')
  .description('Code modifications to assist with OpenLayers upgrades.')
  .version(pkg.version)
  .configureHelp({showGlobalOptions: true})
  .option('--extensions <ext>', 'Extensions of files to be parsed', 'js,mjs')
  .option(
    '--verbose <mode>',
    'Show more information about the transform process (made can be 0, 1, or 2)',
    parseFloat,
    0,
  );

program
  .command('replace-barrel-imports')
  .description('Rewrite imports from barrel files.')
  .argument('<src>', 'Path to files to rewrite.')
  .option(
    '--consider-relative-paths',
    'By default, only imports starting with "ol" are considered. Add this flag to consider relative paths like "../ol/layer.js"',
  )
  .action(async (src, _, cmd) => {
    const options = cmd.optsWithGlobals();
    const replaceBarrelImports = path.resolve('src/replace-barrel-imports.js');
    await jscodeshift(replaceBarrelImports, [src], options);
  });

program.parse();
