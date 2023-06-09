import React from "react";
import "./Projects.css";
import fashionSqaure from "../../images/fashion_square.png";
import traveladvisor from "../../images/travel_advisor.jpg";
import redux from "../../images/redux.svg";
import chakra from "../../images/chakra-ui .svg";
import github from "../../images/github-icon-1.svg";
import screen from "../../images/scrren-white.png";
import meesho from "../../images/MeeshoPage.png";
import meatHub from "../../images/meat-hub.jpg";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import react from "../../images/React.svg";
import trendify from "../../images/trendify-home.jpg";
import mongodb from "../../images/mongodb-icon-1.svg";
import nodejs from "../../images/node-js-icon.svg";
import js from "../../images/javascript.svg";
import firebase from "../../images/firebase.svg";
import netlify from "../../images/netlify.svg";
import vercel from "../../images/vercel.svg";

const Projects = () => {
  return (
    <div id="projects" className="nav-link projects">
      {/* Heading */}
      <div className="headContainer1">
        <span className="orangDash1"></span>
        <h2 className="head1">Projects</h2>
        <span className="orangDash1"></span>
      </div>

      {/* Projects */}
      <div className="projectContainer">
        {/* project1 */}
        <div className="project1 project-card">
          {/* image */}
          <img className="project1-img" src={meesho} alt="" />
          {/* details-div */}
          <div className="project1-details">
            <div>
              <h3 className="project-title">1. &nbsp;OneStore_Collection</h3>
              <span
                className="orangDash2"
                style={{ marginLeft: "50px" }}
              ></span>
            </div>

            <p className="project-description">
              OneStore (Meesho Clone) is a Lifestyle Accessories Brand that
              curates stunning designs and prints it on a wide range of personal
              accessories. We vision to bring the things you love on the things
              you use.
            </p>
            <p>Its a collaborative project with team of 4 members.</p>

            <div className="project-tech-stack">
              <h4>Tech Stack :</h4>
              <div>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={chakra} alt="" />
                <img src={vercel} alt="" />
              </div>
            </div>

            <div className="codebase">
              <a
                className="project-github-link"
                href="https://github.com/dRahul97/Meesho_Clone"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
                <p>Codebase</p>
              </a>
              <a
                className="project-deployed-link"
                href="https://vague-acoustics-7371.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={screen} alt="" />
                <p>Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        {/* project2 */}
        <div className="project1 project-card">
          {/* image */}
          <img className="project1-img" src={trendify} alt="" />
          {/* details-div */}
          <div className="project1-details">
            <div>
              <h3 className="project-title">2. Trendify</h3>
              <span
                style={{ marginLeft: "50px" }}
                className="orangDash2"
              ></span>
            </div>

            <p className="project-description">
              Trendify is E-commerce website inspired by Shopclues.com. It is a
              Lifestyle Accessories Brand that curates stunning designs and
              prints it on a wide range of personal accessories.
            </p>
            <p>Its a collaborative project with team of 5 members.</p>

            <div className="project-tech-stack">
              <h4>Tech Stack :</h4>
              <div>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={chakra} alt="" />
                <img src={mongodb} alt="" />
                <img src={nodejs} alt="" />
                <img src={vercel} alt="" />
              </div>
            </div>

            <div className="codebase">
              <a
                className="project-github-link"
                href="https://github.com/dRahul97/ShopClues_Clone"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
                <p>Codebase</p>
              </a>
              <a
                className="project-deployed-link"
                href="https://trendify-website.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={screen} alt="" />
                <p>Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        {/* project3 */}
        <div className="project1 project-card">
          {/* image */}
          <img className="project1-img" src={meatHub} alt="" />
          {/* details-div */}
          <div className="project1-details">
            <div>
              <h3 className="project-title">3. Meat-Hub</h3>
              <span
                style={{ marginLeft: "50px" }}
                className="orangDash2"
              ></span>
            </div>

            <p className="project-description">
              Meat-Hub exists because we deserver better meat. Meat-Hub is
              designed by taking inspiration from licious web application which
              is an online meat delivery platform.
            </p>
            <p>Its is an Individual project built in 5 days.</p>

            <div className="project-tech-stack">
              <h4>Tech Stack :</h4>
              <div>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={chakra} alt="" />
                <img src={vercel} alt="" />
              </div>
            </div>

            <div className="codebase">
              <a
                className="project-github-link"
                href="https://github.com/dRahul97/Meat-Hub_"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
                <p>Codebase</p>
              </a>
              <a
                className="project-deployed-link"
                href="https://drahul97-meathub.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={screen} alt="" />
                <p>Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        {/* project4 */}
        <div className="project1 project-card">
          {/* image */}
          <img className="project1-img" src={fashionSqaure} alt="" />
          {/* details-div */}
          <div className="project1-details">
            <div>
              <h3 className="project-title">4.&nbsp; Fashion_Square </h3>
              <span
                style={{ marginLeft: "50px" }}
                className="orangDash2"
              ></span>
            </div>

            <p className="project-description">
              Fashion Square is E-commerce website inspired by LimeRoad.com. It
              is an E-Commerce website which sells clothes for Men, Women and
              Kids.
            </p>
            <p>Its a collaborative project with team of 5 members.</p>

            <div className="project-tech-stack">
              <h4>Tech Stack :</h4>
              <div>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={firebase} alt="" />
                <img src={chakra} alt="" />
                <img src={netlify} alt="" />
              </div>
            </div>

            <div className="codebase">
              <a
                className="project-github-link"
                href="https://github.com/dRahul97/LimeRoad_Clone"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
                <p>Codebase</p>
              </a>
              <a
                className="project-deployed-link"
                href="https://fashi0n-square.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={screen} alt="" />
                <p>Live Demo</p>
              </a>
            </div>
          </div>
        </div>

        {/* project5 */}
        <div className="project1 project-card">
          {/* details-div */}
          <img className="project1-img" src={traveladvisor} alt="" />
          <div className="project1-details">
            <div>
              <h3 className="project-title">5. Travel_Advisor </h3>
              <span
                style={{ marginLeft: "50px" }}
                className="orangDash2"
              ></span>
            </div>

            <p className="project-description">
              Traveladvisor ( TripAdvisor Clone ) offers online hotel
              reservations and bookings for transportation, lodging, travel
              experiences, and restaurants.
            </p>
            <p>Its a collaborative project with team of 5 members.</p>

            <div className="project-tech-stack">
              <h4>Tech Stack :</h4>
              <div>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={netlify} alt="" />
              </div>
            </div>

            <div className="codebase">
              <a
                className="project-github-link"
                href="https://github.com/dRahul97/Trip_Advisor_Clone"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
                <p>Codebase</p>
              </a>
              <a
                className="project-deployed-link"
                href="https://stalwart-fox-86b96a.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={screen} alt="" />
                <p>Live Demo</p>
              </a>
            </div>
          </div>
          {/* image */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
