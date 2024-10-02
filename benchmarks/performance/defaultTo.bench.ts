import { bench, describe } from 'vitest';
import { defaultTo as defaultToToolkit } from 'es-toolkit/compat';
import { defaultTo as defaultToLodash } from 'lodash';

describe('defaultTo', () => {
  bench('es-toolkit/defaultTo', () => {
    defaultToToolkit(null, 1);
  });
  bench('lodash/defaultTo', () => {
    defaultToLodash(null, 1);
  });
});
