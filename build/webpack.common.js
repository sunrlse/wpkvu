const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const progressHandler = (percentage, message, ...args) => {
//     console.info(percentage, message, ...args)
// }
module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '@': path.resolve(__dirname, '../src/'),
            '@pages': path.resolve(__dirname, '../src/pages'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@constants': path.resolve(__dirname, '../src/constants'),
        }
    },
    module: {
        rules: [
            // {
            //     test: '\.html',
            //     use: [
            //         'html-loader'
            //     ]
            // },
            {
                enforce: "pre",
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        // options: {
                        //     hotReload: false // 关闭热重载
                        // }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `$blue: deepskyblue;`
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin()
    ],
}