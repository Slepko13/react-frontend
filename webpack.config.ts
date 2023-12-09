import { resolve } from 'path';

import webpack from 'webpack';
import 'webpack-dev-server';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, {
    loader as _loader,
} from 'mini-css-extract-plugin';

type Mode = 'production' | 'development';
type Target = 'browserslist' | 'web';

interface EnvVariables {
    mode: Mode;
}

const target: Target =
    process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';
const mode: Mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? mode, // just 2 ways to pass mode(we have different scripts)
        target,

        // entry: './src/index.js',
        entry: resolve(__dirname, 'src', 'index.js'),

        output: {
            path: resolve(__dirname, 'build'),
            filename: 'bundle.js',
            assetModuleFilename: 'images/[hash][ext][query]',
            clean: true,
        },
        devtool: 'source-map',

        plugins: [
            new HTMLWebpackPlugin({
                // template: './public/index.html',
                template: resolve(__dirname, 'public', 'index.html'),
            }),
            new MiniCssExtractPlugin(),
        ],

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
                        _loader,
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
        devServer: {
            port: 3000,
            hot: true,
        },
    };

    return config;
};
