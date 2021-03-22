const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { publicPath } = require('./public')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 9000,
        historyApiFallback: {
            index: path.join(publicPath, 'index.html')
        }

    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            // tilte: 'forward dev',
            favicon: './src/favicon.ico',
            template: './src/index.html',
            inject: true
        }),
    ]
})