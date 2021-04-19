import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/md-imtiyaz-ahmed-092a6597/">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/ahmedmi9">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/imimtiyaz9">
        <FaTwitter />
      </a>
    </li>
    {/* <li>
      <a href="#">
        <FaGooglePlus />
      </a>
    </li>
    <li>
      <a href="#">
        <FaInstagram />
      </a>
    </li> */}
    
  </ul>
);

export default SocialLinks;
