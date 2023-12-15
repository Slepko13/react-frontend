import type { Configuration } from 'webpack';

import { resolve } from 'path';

import { buildWebpack } from './config/build/build-webpack';
import { BuildMode } from './config/build/types/types';

interface EnvVariables {
    mode: BuildMode;
    port: number;
    analyzer?: boolean;
}

export default (env: EnvVariables) => {
    const paths = {
        output: resolve(__dirname, 'build'),
        entry: resolve(__dirname, 'src', 'index.jsx'),
        html: resolve(__dirname, 'public', 'index.html'),
    };

    const config: Configuration = buildWebpack({
        target: env.mode === 'production' ? 'browserslist' : 'web',
        mode: env.mode === 'production' ? 'production' : 'development',
        port: env.port ?? 3000,
        analyzer: env.analyzer,
        paths,
    });

    return config;
};
