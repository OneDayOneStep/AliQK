const { name } = require('./package');

module.exports = {
    // umd 打包
    webpack: config => {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        config.output.globalObject = 'window';

        return config;
    },

    devServer: e => {
        const config = e;

        config.headers = {
            // 允许跨域 否则 Qiankun 加载该微应用时可能报跨域问题
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;
        config.hot = false;
        config.watchContentBase = false;
        config.liveReload = false;

        return config;
    },
};
