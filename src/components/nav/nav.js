import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <ReactLogo />
          <div>
            <h1>
              <span>Luiz Henrique</span>
              <span>Portfolio</span>
            </h1>
            <small>
              Built with {`<3`} by{" "}
              <a target="_blank" href="https://www.linkedin.com/in/luizhenriquefbb">
                /luizhenriquefbb
              </a>
            </small>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            Home
          </Link>
          <Link
            className={slug === "projects" ? "selected" : null}
            href="/projects"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
