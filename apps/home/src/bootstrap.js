import { createApp } from 'vue';
import App from './App.vue';
import registerPlugins from './plugins'
import "./index.scss";

// this props from host app
const mount = (element, props) => {
    const app = createApp(App)
    registerPlugins(app, props)
    app.mount(element)
}

if (!window.host) {
    mount(document.getElementById("app"));
}

export { mount };