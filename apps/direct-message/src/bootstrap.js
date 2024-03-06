import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from './App';
import { BrowserRouter } from "react-router-dom";

const mount = (element) => {
    ReactDOM.render(
        // use BrowserRouter from shell when app is not standalone
        window.shell ? <App/> : (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ),
        element
    );
}

if (!window.shell) {
    mount(document.getElementById("root"));
}

export {
    mount,
    App
}