import App from './App.svelte';
import "./index.scss";


const mount = (element) => {
    new App({
        target: element
    });
}

if (!window.shell) {
    mount(document.body);
}

export { mount };