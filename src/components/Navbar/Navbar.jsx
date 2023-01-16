import React from "react";
import style from "../Navbar/Navbar.module.css";
import resume from "../../resume/Rahul-Dudka-Resume.pdf";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div id={style.navbarLeft}></div>
      <div id={style.navbarRight}>
        <a href="#tsparticles">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button>
          <a href="https://drive.google.com/file/d/1WndJReS9UjQ1N1W9L-NB53CbCtrFRbmp/view">
            Resume
            <a href={resume} download="Rahul-Dudka-Resume">
              <i className="fa">&#xf019;</i>
            </a>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
