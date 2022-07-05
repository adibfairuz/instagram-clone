import { createApp } from 'vue';
import App from './App.vue';
import registerPlugins from './plugins'
import "./index.scss";

const mount = (element) => {
    const app = createApp(App)
    registerPlugins(app)
    app.mount(element)
}

if (!window.host) {
    mount(document.getElementById("app"));
}

export { mount };