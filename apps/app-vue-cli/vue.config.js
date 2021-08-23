const path = require('path');
const { name } = require('./package');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    devServer: {
        headers: {
            // 允许跨域 否则 Qiankun 加载该微应用时可能报跨域问题
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        }
    }
};
