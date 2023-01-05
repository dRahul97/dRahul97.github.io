import React from "react";
import style from "../Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.App}>
      <div id={style.navbar}>
        <p> Home</p>
        <p> About me </p>
        <p> Skills</p>
        <p> Projects</p>
        <p> Contact </p>
        <button> Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
