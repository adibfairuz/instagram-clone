import { render } from "preact";
import App from "./App";
import "./index.scss";

const mount = (element) => {
    render(
        <App/>,
        element
    );
}

if (!window.shell) {
    mount(document.getElementById("app"));
}

export { mount };