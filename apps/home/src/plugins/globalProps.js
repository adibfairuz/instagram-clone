const GlobalPropsPlugin = (props) => {
  return {
    install(Vue) {
      Vue.config.globalProperties.$globalProps = props;
    },
  }
};

const globalPropsPlugin = (app, props) => {
  app.use(GlobalPropsPlugin(props))
}

export default globalPropsPlugin;