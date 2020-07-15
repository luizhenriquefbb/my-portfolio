import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";

import "./components/fullpage/fullpage.css";
import { AboutMe } from "./pages/about-me/AboutMe";
import Project from "./pages/projects/Project";

const possibleAnimations = [
  {
    label: "Cube Animation",
    value: "cubeAnimation"
  },
  {
    label: "Fall Animation",
    value: "fallAnimation"
  },
  {
    label: "Fold Out Animation",
    value: "foldOutAnimation"
  },
  {
    label: "Open Animation",
    value: "openAnimation"
  },
  {
    label: "Scale Out Animation",
    value: "scaleOutAnimation"
  }
];

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
];
