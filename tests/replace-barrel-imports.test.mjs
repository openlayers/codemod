import {ESLint} from 'eslint';
import jscodeshift from 'jscodeshift';
import {expect, test} from 'vitest';
import replaceBarrelImports from '../src/replace-barrel-imports.js';

function dedent(source) {
  const lines = source.split('\n');
  const output = [];
  let indent = -1;
  for (const line of lines) {
    if (indent < 0) {
      if (line.trim().length === 0) {
        continue;
      }
      indent = line.length - line.trimStart().length;
    }
    output.push(line.substring(indent).trimEnd());
  }
  return output.join('\n');
}

async function format(source) {
  source = dedent(source);
  const eslint = new ESLint({fix: true});
  const results = await eslint.lintText(source);
  return results[0].output || source;
}

const cases = [
  {
    name: 'assorted default imports',
    options: {considerRelativePaths: false},
    input: `
      import {Map, View} from 'ol';
      import {Tile as TileLayer} from 'ol/layer.js';
      import {OSM} from 'ol/source.js';

      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
  `,
    output: `
      import Map from 'ol/Map.js';
      import View from 'ol/View.js';
      import TileLayer from 'ol/layer/Tile.js';
      import OSM from 'ol/source/OSM.js';

      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
  `,
  },
  {
    name: 'avoid modifying relative imports unless specified',
    options: {considerRelativePaths: false},
    input: `
      import {Map, View} from 'ol';
      import {Tile as TileLayer} from './my/custom/ol/layer.js';
      import {OSM} from 'ol/source.js';
  `,
    output: `
      import Map from 'ol/Map.js';
      import View from 'ol/View.js';
      import OSM from 'ol/source/OSM.js';
      import {Tile as TileLayer} from './my/custom/ol/layer.js';
  `,
  },
  {
    name: 'support modifying relative imports',
    options: {considerRelativePaths: true},
    input: `
      import {Map, View} from '../src/ol/index.js';
      import {Tile as TileLayer} from '../src/ol/layer.js';
      import {OSM} from '../src/ol/source.js';
  `,
    output: `
      import Map from '../src/ol/Map.js';
      import View from '../src/ol/View.js';
      import TileLayer from '../src/ol/layer/Tile.js';
      import OSM from '../src/ol/source/OSM.js';
  `,
  },
  {
    name: 'named imports',
    options: {considerRelativePaths: false},
    input: `
      import {defaults as controlDefaults} from 'ol/control.js';
      import {createWMSLoader as cwl, createArcGISRestLoader} from 'ol/source.js';
      import {METERS_PER_UNIT} from 'ol/proj.js';
  `,
    output: `
      import {defaults as controlDefaults} from 'ol/control/defaults.js';
      import {METERS_PER_UNIT} from 'ol/proj/Units.js';
      import {createArcGISRestLoader} from 'ol/source/arcgisRest.js';
      import {createWMSLoader as cwl} from 'ol/source/wms.js';
  `,
  },
];

for (const c of cases) {
  test(c.name, async () => {
    const output = replaceBarrelImports(
      {source: dedent(c.input)},
      {jscodeshift},
      c.options,
    );

    const o = await format(output);
    expect(o).toBe(dedent(c.output));
  });
}
