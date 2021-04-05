const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common')
const CDN_LIST = require('./cdn_list')

const config = {
    mode: 'production',
    // devtool: 'source-map',
    output: {
        filename: 'js/[name].[contenthash:8].js',
        // chunkFilename: 'js/[name].[contenthash].js'
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'lodash': '_',
        // lodash: {
        //     commonjs: 'lodash',
        //     amd: 'lodash',
        //     root: '_'
        // }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        // options: {
                        //   postcssOptions: {
                        //     plugins: [
                        //       [
                        //         "autoprefixer",
                        //         {
                        //           // 选项
                        //         },
                        //       ],
                        //     ],
                        //   },
                        // },
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        // options: {
                        //   postcssOptions: {
                        //     plugins: [
                        //       [
                        //         "autoprefixer",
                        //         {
                        //           // 选项
                        //         },
                        //       ],
                        //     ],
                        //   },
                        // },
                    },
                    'less-loader'
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'APP_TITLE': JSON.stringify('线上环境')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            // chunkFilename: '[id].[contenthash:8].css'
        }),
        // new UglifyJSPlugin({
        //     // sourceMap: true
        // }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false, // 阻止watch变化时删除未改变的静态文件
        }),
        new HtmlWebpackPlugin({
            favicon: './src/favicon.ico',
            template: './src/index.html',
            tilte: '线上环境',
            cdnJsList: CDN_LIST.js_list,
            inject: true
        }),
        
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimizer: [
            // new TerserPlugin({
            //     cache: true,
            //     extractComments: false
            // }),
            // new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'initial', // 默认值async , initial,async,all
            // name: '', // 打包的chunks的名字，可接受function
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
                    // maxSize: 500000,
                    minChunks: 1,
                    priority: 10
                },
                antd: {
                    name: 'antd',
                    test: /[\\/]node_modules[\\/]_?(ant-design-vue|@ant-design)(.*)/,
                    priority: 20,
                },
                // default: {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true
                // }
            }
        },
        runtimeChunk: {
            name: 'runtime'
        },
    },
    
}

module.exports = merge(common, config)