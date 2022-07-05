import App from './App.svelte';
import "./index.scss";


const mount = (element) => {
    new App({
        target: element
    });
}

if (!window.host) {
    mount(document.body);
}

export { mount };