import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className="about section">
      <div id={styles.aboutContainer} className="nav-link about">
        {/* Heading */}
        <div className={styles.headingContainer}>
          <span className={styles.orangeDash}></span>
          <h2 className={styles.heading}>ABOUT ME </h2>
          <span className={styles.orangeDash}></span>
        </div>

        {/* About me */}

        <div id="user-detail-intro" className={styles.aboutme}>
          <h3> Hello! my name is Rahul, 👋 a Full stack web developer. </h3>
          <p>
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
    </div>
  );
};

export default About;
