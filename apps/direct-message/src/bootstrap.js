import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from './App';

const mount = (element) => {
    ReactDOM.render(
        <App/>,
        element
    );
}

if (!window.host) {
    mount(document.getElementById("root"));
}

export {
    mount,
    App
}