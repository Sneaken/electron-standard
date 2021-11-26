import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const dependencies = { ...pkg.dependencies };
const external = [...Object.keys(dependencies), 'electron'];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'app/main',
        format: 'cjs',
      },
    ],
    external,
    plugins: [
      typescript(),
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      json(),
      terser(),
    ],
  },
];
