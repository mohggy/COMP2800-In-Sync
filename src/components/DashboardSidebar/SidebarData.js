import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/dashboard",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Calendar",
    path: "/dashboard",
    icons: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Events",
    path: "/events",
    icons: <IoIcons.IoIosCalendar />,
    cName: "nav-text",
  },
  {
    title: "Log out",
    path: "/",
    icons: <FaIcons.FaSignOutAlt />,
    cName: "nav-text",
  },
];
