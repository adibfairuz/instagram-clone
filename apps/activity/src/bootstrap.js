import { render } from "preact";
import App from "./App";
import "./index.scss";

const mount = (element) => {
    render(
        <App/>,
        element
    );
}

if (!window.host) {
    mount(document.getElementById("app"));
}

export { mount };