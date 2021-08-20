import { registerMicroApps, start } from "qiankun";

registerMicroApps([
    {
        name: 'project-react',
        entry: '//localhost:3000',
        container: '#microAppContainer',
        activeRule: '/app-react',
    },
    {
        name: "project-vue-cli",
        entry: "//localhost:5000",
        container: "#microAppContainer",
        activeRule: "/app-vue-cli"
    },
    {
        name: "project-vue-vite",
        entry: "//localhost:4000",
        container: "#microAppContainer",
        activeRule: "/app-vue-vite"
    }
]);

console.log("QK Running");

start();
