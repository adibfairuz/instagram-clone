import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import LoadingScreen from "./components/Loaders/LoadingScreen";
import "./index.scss";
const App = lazy(() => import("./App"));

window.host = true

ReactDOM.render(
    <Suspense fallback={<LoadingScreen />}>
        <App/>
    </Suspense>,
    document.getElementById("root")
);
