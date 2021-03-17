const webpack = require('webpack')
const { merge } = require('webpack-merge')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    output: {
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    plugins: [
        // new UglifyJSPlugin({
        //     // sourceMap: true
        // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'all', // 默认值async , initial,async,all
            name: '', // 打包的chunks的名字，可接受function
            minSize: 30000, // 形成一个新代码块最小的体积
            minChunks: 1, // 分割前这个代码块最小应该被引用的次数
            maxInitialRequests: 3, // 一个入口最大的并行请求数
            maxAsyncRequests: 5, // 按需加载时最大的并行请求数
            automaticNameDelimiter: '~', // 打包分隔符
            cacheGroups: { // 缓存组
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    minSize: 30000,
                    minChunks: 1,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
})