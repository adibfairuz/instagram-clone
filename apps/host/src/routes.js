import React, { lazy } from 'react';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus, faHeart, faCircleUser } from '@fortawesome/free-regular-svg-icons'
const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const User = lazy(() => import("./pages/User"));

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
      path: "",
      label: "Post",
      Element: () => <div>Coming Soon</div>,
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

export default routes