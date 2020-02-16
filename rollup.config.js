import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

import { main, version } from './package.json';

const config = {
  plugins: [typescript(), commonjs(), resolve(), serve()],
  watch: {
    include: 'src/**'
  }
};

export default [
  {
    input: 'src/index.ts',
    output: {
      banner: `/*
Suggested Search - ${version}
*/`,
      file: main,
      format: 'umd',
      name: 'SuggestedSearch',
      sourcemap: true
    },
    ...config
  }
];
