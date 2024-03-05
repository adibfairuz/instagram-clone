import globalPropsPlugin from './globalProps';
import icon from './icon'
import router from './router';

const plugins = [
    icon,
    // router,
    globalPropsPlugin
]

const registerPlugins = (app, props) => {
    plugins.forEach(registerPlugin => {
        registerPlugin(app, props)
    });
}

export default registerPlugins