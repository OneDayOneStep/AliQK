import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

function render(props) {
    const { container } = props;
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        // 根据是否传入的 props 是否为空寻找容器
        container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    // 独立运行
    render({});
}

export async function bootstrap() {
    // 暂时没发现作用
    console.log('app-react bootstraped');
}

export async function mount(props) {
    // 供乾坤调用进行应用装载(就是load项目进去)
    render(props);
    console.log('app-react mount', props);
}

export async function unmount(props) {
    // 供乾坤调用进行应用卸载(销毁实例)
    const { container } = props;
    ReactDOM.unmountComponentAtNode(
        container ? container.querySelector('#root') : document.querySelector('#root')
    );
    console.log('app-react unMount');
}
