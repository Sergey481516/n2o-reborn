import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            // file: packageJson.main,
            dir: 'build',
            format: "cjs",
            sourcemap: true
        },
        // {
        //     // file: packageJson.module,
        //     dir: 'build',
        //     format: "esm",
        //     sourcemap: true
        // }
    ],
    // preserveModules: true,
    plugins: [
        peerDepsExternal(),
        resolve({
          rootDir: './src'
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        commonjs(),
        json(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss()
    ]
};
