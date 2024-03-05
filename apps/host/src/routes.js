import React, { lazy } from 'react';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus, faHeart, faCircleUser } from '@fortawesome/free-regular-svg-icons'
const Home = lazy(() => import("./pages/Home"));
const DirectMessage = lazy(() => import("./pages/DirectMessage"));
const Explore = lazy(() => import("./pages/Explore"));
const User = lazy(() => import("./pages/User"));
const Activity = lazy(() => import("./pages/Activity"));

const routes = [
    {
      path: "/",
      label: "Home",
      Element: Home,
      icon: faHouse
    },
    {
      path: "/direct-message",
      label: "Direct Message",
      Element: DirectMessage,
      isSubMenu: true
    },
    {
      path: "/explore",
      label: "Explore",
      Element: Explore,
      icon: faMagnifyingGlass
    },
    {
      path: "#",
      label: "Post",
      Element: () => <div>Coming Soon</div>,
      icon: faSquarePlus
    },
    {
      path: "/activity",
      label: "Activity",
      Element: Activity,
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