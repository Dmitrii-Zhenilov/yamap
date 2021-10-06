const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: ['./src/index.js', '/src/style.css'],
    output: {
        path: path.resolve(__dirname, 'yamap'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
                {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
            ],
        },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}