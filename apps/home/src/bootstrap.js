import { createApp } from 'vue';
import App from './App.vue';
import registerPlugins from './plugins'
import "./index.scss";

// this props from shell app
const mount = (element, props) => {
    const app = createApp(App)
    registerPlugins(app, props)
    app.mount(element)
}

if (!window.shell) {
    mount(document.getElementById("app"));
}

export { mount };