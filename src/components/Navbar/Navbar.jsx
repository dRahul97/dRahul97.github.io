import React from "react";
import style from "../Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div
        style={{
          display: "flex",
          width: "90%",
          height: "64px",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id={style.navbarLeft}></div>
        <div id={style.navbarRight}>
          <a href="#tsparticles">Home</a>
          <a href=".nav-link.home">About</a>
          <a href=".nav-link.about">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button>
            Resume <i className="fa">&#xf019;</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
