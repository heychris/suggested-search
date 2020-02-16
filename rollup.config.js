import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

import { main, version } from './package.json';

const config = {
  input: 'src/index.ts',
  output: {
    banner: `/*\nSuggested Search ${version}\n*/`,
    file: main,
    format: 'umd',
    name: 'SuggestedSearch',
    sourcemap: true
  },
  plugins: [typescript(), commonjs(), resolve()],
  watch: {
    include: 'src/**'
  }
};

if (process.env.BUILD === 'dev') {
  config.plugins.push(
    serve({
      contentBase: ['examples', 'dist']
    })
  );
}

export default config;
