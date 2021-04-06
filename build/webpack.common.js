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
    stats: {
        assets: true,
        builtAt: true,
        children: false, // 只隐藏modules， 会显示一行行 Child xxx plugin  xxx ， 两者同时为false，则这些行都不展示
        modules: false, // 只隐藏children，还是会显示一行行减少后的信息，隐藏命令行构建过程中 [模块id] xxxx  [built] 一行一行的信息，
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
            '@libs': resolve('../src/libs'),
            '@ant-design/icons/lib/dist$': resolve('../src/components/antd/icons')
        }
    },
    module: {
        rules: [
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
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/'
                    }
                }
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.html$/, 
                exclude: /src\/index.html/,
                use: {
                  loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin()
    ],
}