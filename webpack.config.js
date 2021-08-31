const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        invoice: './src/invoice.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "invoiceApp",
            template: "./index.html",
            chunks: ['index']
    }),
        new HtmlWebpackPlugin({
            filename: 'invoice.html',
            template: './invoice.html',
            chunks: ['invoice']
        })
],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                  test: /\.(png|svg|jpg|jpeg|gif)$/i,
                  type: 'asset/resource',
           },
        ]
    }
}