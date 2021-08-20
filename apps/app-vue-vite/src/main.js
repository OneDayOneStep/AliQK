// noinspection JSUnresolvedFunction

import { createApp } from 'vue'
import App from './App.vue'
import routerGenerator from "./router";
import './public-path';

let app, router;
function render(props = {}) {

    const { container } = props; // 从乾坤接收参数

    app = createApp(App); // 创建 Vue 实例

    // 根据运行环境生成路由(基础路径不同)
    router = routerGenerator(
        window.__POWERED_BY_QIANKUN__ ? '/app-vue-vite' : '/'
    );

    app.use(router);

    const mountDOM = container ? container.querySelector('#app') : '#app';

    app.mount(mountDOM);
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('app-vue-vite bootstraped');
}

export async function mount(props) {
    render(props);
    console.log('app-vue-vite mount', props);
}

export async function unmount() {
    app.unmount();
    app = null;
    router = null;
    console.log('app-vue-vite unMount');
}

