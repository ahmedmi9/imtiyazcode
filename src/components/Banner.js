import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Md Imtiyaz Ahmed</h1>
      <h3>
        I'm a Bangalore based <span>Full Stack Developer</span>, develops end to
        end web applications in
        <span> React</span> and <span>Java</span>. Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>
        .
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
