import './public-path';
import { createApp } from 'vue'
import App from './App.vue'
import routerGenerator from "./router";

let app, router;
function render(props = {}) {

    const { container } = props; // 从乾坤接收参数

    app = createApp(App); // 创建 Vue 实例

    // 是否独立运行决定根路径
    router = routerGenerator(
        window.__POWERED_BY_QIANKUN__ ? '/app-vue-cli' : '/'
    );

    app.use(router);

    // 根据是否传入的 props 是否为空寻找容器
    const mountDOM = container ? container.querySelector('#app') : '#app';

    app.mount(mountDOM);
}

if (!window.__POWERED_BY_QIANKUN__) {
    // 独立运行
    render();
}

export async function bootstrap() {
    // 暂时没发现作用
    console.log('app-vue-cli bootstraped');
}

export async function mount(props) {
    // 供乾坤调用进行应用装载(就是load项目进去)
    render(props);
    console.log('app-vue-cli mount', props);
}

export async function unmount() {
    // 供乾坤调用进行应用卸载(销毁实例)
    app.unmount();
    app = null;
    router = null;
    console.log('app-vue-cli unMount');
}

