import type { Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/types';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development';

    const plugins: Configuration['plugins'] = [
        new HTMLWebpackPlugin({
            template: options.paths.html,
        }),
    ];

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name][contenthash].css',
                chunkFilename: 'css/[name][id][contenthash].css',
            })
        );
        if (options.analyzer) {
            plugins.push(new BundleAnalyzerPlugin());
        }
    }

    return plugins;
}
