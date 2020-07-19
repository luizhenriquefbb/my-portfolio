import React, {useEffect}from 'react';
import './page.css';

const Page = ({ children }) => {


  // show/hide header on scroll
  useEffect(() => {
    let prevScrollpos = 0;
    let currentScrollPos = 0;

    document.querySelector(".page")?.addEventListener('scroll', () => {
      const page = document.querySelector(".page");
      currentScrollPos = (page.scrollTop);

      // up
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("body")?.classList.add("animated");
        document.querySelector("body")?.classList.add("visible");
      }
      // down
      else {
        document.querySelector("body")?.classList.remove("animated");
        document.querySelector("body")?.classList.remove("visible");
      }

      prevScrollpos = (page.scrollTop);

    });
  }, []);

  return <div className="page">{children}</div>;
};

export default Page;
