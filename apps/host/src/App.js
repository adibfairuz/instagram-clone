import React, { Suspense, lazy } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus, faHeart, faCircleUser } from '@fortawesome/free-regular-svg-icons'
const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const User = lazy(() => import("./pages/User"));
import "./index.scss";

const routes = [
  {
    path: "/",
    label: "Home",
    Element: Home,
    icon: faHouse
  },
  {
    path: "/explore",
    label: "Explore",
    Element: Explore,
    icon: faMagnifyingGlass
  },
  {
    label: "Post",
    icon: faSquarePlus
  },
  {
    path: "/activity",
    label: "Activity",
    Element: () => <div>Coming Soon</div>,
    icon: faHeart
  },
  {
    path: "/user",
    label: "User",
    Element: User,
    icon: faCircleUser
  }
]

const App = () => {
  const { pathname } = useLocation()
  return (
    <div className="bg-gray-200">
      <div className="flex bg-gray-100 flex-col m-auto max-w-[500px] min-h-screen relative">
        <div className="w-full">
          <Routes>
            {
              routes.map(({ path, Element }) => (
                <Route key={path} path={path} element={
                  <Suspense fallback={<>Loading...</>}>
                    <Element />
                  </Suspense>
                } />
                ))
              }
          </Routes>
        </div>
        <div className="fixed bottom-0 left-0 w-full z-10">
          <div className="flex justify-around max-w-[500px] mx-auto border-t bg-white border-t-gray-200">
            {
              routes.map(({ path, icon }) => {
                if (path) {
                  return (
                    <Link key={path} to={path} className={`${ pathname === path ? 'text-blue-600' : '' } flex items-center justify-center w-full rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600`}>
                        <FontAwesomeIcon icon={icon} size="xl" />
                    </Link>
                  )
                } else {
                  return (
                    <div key={path} className={`flex items-center justify-center w-full rounded-md px-2 py-3 cursor-pointer`}>
                        <FontAwesomeIcon icon={icon} size="xl" />
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>)
}


export default App;
