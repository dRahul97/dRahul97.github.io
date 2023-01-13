import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Social from "./Social";
import styles from "../Home/Home.module.css";

const Home = () => {
  return (
    <section id="home" className="nav-link">
      {/* Home */}
      <div
        style={{
          // border: "1px solid #fff",
          display: "flex",
          width: "82%",
          color: "#fff",
          margin: "auto",
          height: "500px",
          justifyContent: "space-around",
          paddingTop: "130px",
        }}
      >
        <div
          style={{
            // border: "1px solid orange",
            width: "59%",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "37%",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "20px" }}>Hello, 👋 I am</p>
            <span
              style={{
                border: "1px solid orange",
                margin: "auto",
                width: "95px",
                backgroundColor: "orange",
              }}
            ></span>
          </div>
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: "600",
              lineHeight: "80px",
              fontFamily: "Poppins",
              marginTop: "0",
            }}
          >
            {" "}
            Rahul Dudka <br />
            &lsaquo; Full Stack Web Developer / &rsaquo;
          </h1>
          <p style={{ fontSize: "18px" }}>
            💻 I design and build quality responsive websites, clean user
            interfaces and interactive web apps. Targeting 💛
            <span style={{ borderBottom: "2px solid orange" }}>
              Javascript
            </span>{" "}
            ⚛️ <span style={{ borderBottom: "2px solid orange" }}>React </span>
            and other web development opportunities.
          </p>
          <Social />
        </div>
        <div style={{ width: "34%" }}>
          <div className={styles.profilePic}></div>
        </div>
      </div>

      <div class="calendar">Loading the data just for you.</div>

      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </section>
  );
};

export default Home;
