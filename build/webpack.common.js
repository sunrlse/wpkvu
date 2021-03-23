const path = require('path')
const { publicPath } = require('./public')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const progressHandler = (percentage, message, ...args) => {
//     console.info(percentage, message, ...args)
// }
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js',
    },
    output: {
        filename: '[name].js',
        path: resolve('../dist'),
        publicPath: publicPath
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '@': resolve('../src/'),
            '@assets': resolve('../src/assets'),
            '@style': resolve('../src/assets/style'),
            '@pages': resolve('../src/pages'),
            '@components': resolve('../src/components'),
            '@constants': resolve('../src/constants'),
            '@ant-design/icons/lib/dist$': resolve('../src/components/antd/icons')
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
            // {
            //     test: /\.css$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader'
            //     ]
            // },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         'sass-loader',
            //     ]
            // },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        // options: {
                            // javascriptEnabled: true
                            // lessOptions: {
                            //     javascriptEnabled: true,
                            //     strictMath: true,
                            //     noIeCompat: true
                            // }
                        // }
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