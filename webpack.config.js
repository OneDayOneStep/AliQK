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
        port: '12345',
        historyApiFallback:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./index.html"
        })
    ]
};
