const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
    entry: {main: "./src/js/index.js"},
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            outputPath: './dist',
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                exclude: /icon/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: "index.html",
            inject: false
        }),
        new SVGSpritemapPlugin("src/img/icon/*.svg", {
            output: {
                filename: "img/spritemap.svg"
            }
        })
    ]
};