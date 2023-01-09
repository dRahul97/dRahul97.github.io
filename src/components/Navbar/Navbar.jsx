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
          <a href="index.html">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
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
