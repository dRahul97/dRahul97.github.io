import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section
      id="about"
      style={{
        // border: "1px solid #fff",
        width: "82%",
        color: "#fff",
        margin: "auto",
        height: "500px",
        paddingTop: "150px",
      }}
    >
      <div>
        <div className={styles.headingContainer}>
          <span className={styles.orangeDash}></span>
          <h2 className={styles.heading}>ABOUT ME</h2>
          <span className={styles.orangeDash}></span>
        </div>
        <div style={{ width: "80%", margin: "auto" }}>
          <h3 style={{ fontSize: "18px" }}>
            Hello!, my name is Rahul, a Full stack web developer.
          </h3>
          <p style={{ fontSize: "18px" }}>
            🔸Worked on different projects as leader and co-leader. 🔸
            <br />
            🔸 Keen to find a challenging position within an ambitious
            company.🔸
            <br />
            🔸 Interested in learning and absorbing new tech in the growing
            world.🔸 <br />
            🔸Innovative, result-driven Web Developer with sound knowledge in
            JavaScript and React in the Frontend. 🔸
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
