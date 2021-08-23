const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./index.js",
    devtool: "source-map",
    output: {
        publicPath: '/',
    },
    devServer: {
        open: true,
        port: '5500',
        historyApiFallback: true // 忽略地址栏 pathname 都返回 index.html 解决非根路径刷新 404 的问题
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./index.html"
        })
    ]
};
