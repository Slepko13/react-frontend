import { resolve } from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = 'production' | 'development';
type Target = 'browserslist' | 'web';

interface EnvVariables {
    mode: Mode;
    port: number;
}

const target: Target =
    process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';
const mode: Mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

export default (env: EnvVariables) => {
    const isDev = env.mode === 'development';

    const config: Configuration = {
        mode: env.mode ?? mode, // just 2 ways to pass mode(we have different scripts)
        target,

        // entry: './src/index.jsx',
        entry: resolve(__dirname, 'src', 'index.jsx'),

        output: {
            path: resolve(__dirname, 'build'),
            filename: 'bundle.[contenthash].js',
            assetModuleFilename: 'images/[hash][ext][query]',
            clean: true,
        },

        plugins: [
            new HTMLWebpackPlugin({
                // template: './public/index.html',
                template: resolve(__dirname, 'public', 'index.html'),
            }),
            !isDev &&
                new MiniCssExtractPlugin({
                    filename: 'css/[name][contenthash].css',
                    chunkFilename: 'css/[name][id][contenthash].css',
                }),
        ].filter(Boolean),

        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(s[ac]|c)ss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: ['postcss-preset-env'],
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev
            ? {
                  port: env.port ?? 3000,
                  hot: true,
              }
            : undefined,
    };

    return config;
};
