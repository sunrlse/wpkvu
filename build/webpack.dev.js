const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const px2rem = require('postcss-pxtorem')
const { publicPath } = require('./public')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './dist',
        hot: true,
        // inline: true, //开启页面自动刷新
        // host: '0.0.0.0',
        port: 9000,
        // historyApiFallback: {
        //     index: path.join(publicPath, 'index.html')
        // },
        historyApiFallback: true,
        proxy: {
            '/wx-api': {
                target: 'http://localhost:8087',
                pathRewrite: { '^/wx-' : '/'},
                // changeOrigin: true // 域名形式需要它
            },
            secure: false
        }

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    px2rem({
                                        rootValue: 37.5,
                                        propList: ['*']
                                    })
                                ]
                            }
                        }

                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    px2rem({
                                        rootValue: 37.5,
                                        propList: ['*']
                                    })
                                ]
                            }
                        }

                    },
                    'less-loader'
                ]
            },
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'APP_TITLE': JSON.stringify('开发环境')
        }),
        new HtmlWebpackPlugin({
            favicon: './src/favicon.ico',
            template: './src/index.html',
            tilte: '开发环境', // 最后被变成了 这个插件默认值 Webpack App
            inject: true
        }),
    ]
})