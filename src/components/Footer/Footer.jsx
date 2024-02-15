import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footerr">
      <a href="#" className="footer__logo">
        ༺༒𝕽𝖆𝖍𝖚𝖑༒༻
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#stats">Stats & Calender</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/dRahul97" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-dudka-23557a1a1/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/rahul_dudka" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rahul Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
