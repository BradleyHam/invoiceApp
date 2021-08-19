const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [new HtmlWebpackPlugin({
        title: "invoiceApp",
        template: "./index.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}