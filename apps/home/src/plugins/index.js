import icon from './icon'

const plugins = [
    icon
]

const registerPlugins = (app) => {
    plugins.forEach(registerPlugin => {
        registerPlugin(app)
    });
}

export default registerPlugins