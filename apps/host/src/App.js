import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import BottomTabs from "./containers/BottomTabs";
import Page from "./components/Page";
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Page>
        <Routes>
          {
            routes.map(({ path, Element, label }) => (
              <Route key={label} path={path} element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Element />
                </Suspense>
              } />
              ))
            }
        </Routes>
        <BottomTabs />
      </Page>
    </BrowserRouter>
  )
}


export default App;
