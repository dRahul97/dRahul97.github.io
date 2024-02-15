import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        id="contact-linkedin"
        href="https://www.linkedin.com/in/rahul-dudka-23557a1a1/"
        target="_blank"
      >
        <BsLinkedin className="icon" />
      </a>

      <a id="contact-github" href="https://github.com/dRahul97" target="_blank">
        <FaGithub className="icon" />
      </a>

      <a id="contact-phone" href="tel:8446459594" target="_blank">
        <BiPhone className="icon" />
      </a>

      <a href="https://twitter.com/rahul_dudka" target="_blank">
        <BsTwitter className="icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
