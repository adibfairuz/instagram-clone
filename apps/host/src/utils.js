// from https://stackoverflow.com/questions/68123199/webpack-module-federation-lazy-loading-remoteentry-js#answer-72063104

const loadScope = (url, scope) => {
    const element = document.createElement('script');
    const promise = new Promise((resolve, reject) => {
        element.src = url;
        element.type = 'text/javascript';
        element.async = true;
        element.onload = () => resolve(window[scope]);
        element.onerror = reject;
    });
    document.head.appendChild(element);
    promise.finally(() => document.head.removeChild(element));
    return promise;
};

const loadModule = async (url, scope, module) => {
    try {
        const container = await loadScope(url, scope);
        await __webpack_init_sharing__('default');
        await container.init(__webpack_share_scopes__.default);
        const factory = await container.get(module);
        return factory();
    } catch (error) {
        console.error('Error loading module:', error);
        throw error;
    }
};

export {
    loadModule,
    loadScope,
}