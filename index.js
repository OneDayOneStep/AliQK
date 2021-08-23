import { registerMicroApps, start } from "qiankun";

registerMicroApps([
    {
        name: 'project-react', // 项目名称 (异常报错时有用)
        entry: '//localhost:5505', // 微应用运行的地址与端口
        container: '#microAppContainer', // 微应用挂载的 DOM 节点
        activeRule: '/app-react', // 重要, 根据主应用 location.pathname 进行匹配
    },
    {
        name: "project-vue-cli",
        entry: "//localhost:5510",
        container: "#microAppContainer",
        activeRule: "/app-vue-cli"
    },
    {
        name: "project-vue-vite",
        entry: "//localhost:5515",
        container: "#microAppContainer",
        activeRule: "/app-vue-vite"
    }
]);

console.log("QK Running");

start(); // 运行
