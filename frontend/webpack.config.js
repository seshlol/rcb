const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js'
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.c|(s[ac])ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
            // favicon: './public/favicon.ico'
        }),
        new webpack.DefinePlugin({
            'process.env.BACKEND_ADDRESS': JSON.stringify(process.env.BACKEND_ADDRESS),
            'process.env.BACKEND_PORT': JSON.stringify(process.env.BACKEND_PORT),
            'process.env.BACKEND_PROTOCOL': JSON.stringify(process.env.BACKEND_PROTOCOL)
        })
    ]
};