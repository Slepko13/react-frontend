import { resolve } from 'path';

import { buildWebpack } from './config/build/build-webpack';
import { BuildMode, BuildPlatform } from './config/build/types/types';

import type { Configuration } from 'webpack';

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths = {
        output: resolve(__dirname, 'build'),
        entry: resolve(__dirname, 'src', 'index.jsx'),
        html: resolve(__dirname, 'public', 'index.html'),
        favicon: resolve(__dirname, 'public', 'test-favicon.png'),
    };

    const config: Configuration = buildWebpack({
        target: env.mode === 'production' ? 'browserslist' : 'web',
        mode: env.mode === 'production' ? 'production' : 'development',
        port: env.port ?? 3000,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
        paths,
    });

    return config;
};
