import { render } from "solid-js/web";
import App from "./App";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faChevronDown, faLock, faTableCells, faUserPlus, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import "./index.scss";

library.add([
    faLock,
    faChevronDown,
    faSquarePlus,
    faBars,
    faUserPlus,
    faTableCells,
    faUsersRectangle
])

const mount = (element) => {
    render(App, element);
}

if (!window.host) {
    mount(document.getElementById("app"));
}

export { mount };