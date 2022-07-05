import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import LoadingScreen from "./components/LoadingScreen";
const App = lazy(() => import("./App"));

window.host = true

ReactDOM.render(
    <Suspense fallback={<LoadingScreen />}>
        <App/>
    </Suspense>,
    document.getElementById("root")
);
