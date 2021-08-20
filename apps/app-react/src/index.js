import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

function render(props) {
    const {container} = props;
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('app-react bootstraped');
}

export async function mount(props) {
    render(props);
    console.log('app-react mount', props);
}

export async function unmount(props) {
    const {container} = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
    console.log('app-react unMount');
}
