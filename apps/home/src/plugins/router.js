import { createRouter, createWebHashHistory } from 'vue-router';

const routerPlugin = (app) => {
    const router = createRouter({
        history: createWebHashHistory(),
        routes: []
      })
    app.use(router)
}

export default routerPlugin