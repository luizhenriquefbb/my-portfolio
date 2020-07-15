import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";

import "./components/fullpage/fullpage.css";
import { AboutMe } from "./pages/about-me/AboutMe";
import Project from "./pages/projects/Project";
import { GetInTouch } from "./pages/get-in-touch/GetInTouch";

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <AboutMe />,
  },
  {
    slug: "projects",
    className: "slide page-two",
    children: <Project />,
  },
  {
    slug: "get-in-touch",
    className: "slide",
    children: <GetInTouch />,
  },
];
