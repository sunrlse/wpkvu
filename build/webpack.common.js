const path = require('path')
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
        // publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
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
        new ProgressBarPlugin()
    ],
}