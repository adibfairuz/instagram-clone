import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from './App';
import { BrowserRouter } from "react-router-dom";

const mount = (element) => {
    ReactDOM.render(
        // use BrowserRouter from host when app is not standalone
        window.host ? <App/> : (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ),
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