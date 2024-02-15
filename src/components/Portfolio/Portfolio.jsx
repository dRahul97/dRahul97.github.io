import React from "react";
import "./portfolio.css";
import projectimg1 from "../../assets/trendify-home.jpg";
import projectimg2 from "../../assets/meat-hub.jpg";
import projectimg3 from "../../assets/travel_advisor.jpg";
import projectimg4 from "../../assets/MeeshoPage.png";
import projectimg5 from "../../assets/limeroadHP.png";

const data = [
  {
    id: 1,
    image: projectimg1,
    title: "ShopClues- Clone",
    description: " It provides a gateway to trendy shopping.",
    tech: `HTML | CSS | ReactJS | Chakra UI | Redux | Nodejs | Mongodb | Vercel `,
    github: "https://github.com/dRahul97/ShopClues_Clone",
    demo: "https://trendify-website.vercel.app/",
  },
  {
    id: 2,
    image: projectimg2,
    title: "Licious- Clone ",
    description: " It's a fresh online meat delivery platform.",
    tech: `HTML | CSS | ReactJS | Chakra UI | Redux | Vercel `,
    github: "https://github.com/dRahul97/Meat-Hub_",
    demo: "https://drahul97-meathub.vercel.app/",
  },
  {
    id: 3,
    image: projectimg3,
    title: "Tripadvisor- Clone ",
    description: " It offers online hotel reservation and more.",
    tech: "HTML | CSS | JavaScript | Bootstrap | Netlify",
    github: "https://github.com/dRahul97/Trip_Advisor_Clone",
    demo: "https://stalwart-fox-86b96a.netlify.app/",
  },
  {
    id: 4,
    image: projectimg4,
    title: "Meesho- Clone",
    description: " It's an affordable online shopping platform.",
    tech: `HTML | CSS | ReactJS | Chakra UI | Redux | Netlify `,
    github: "https://github.com/dRahul97/Meesho_Clone",
    demo: "https://storied-blini-63970f.netlify.app/",
  },
  {
    id: 5,
    image: projectimg5,
    title: "Limeroad- Clone ",
    description: " It is an E-commerce shopping website.",
    tech: `HTML | CSS | ReactJS | Firebase | Redux | ChakraUI`,
    github: "https://github.com/Avneesh002/Fashion-square",
    demo: "https://fashi0n-square.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, tech, github, demo }) => {
          return (
            <article key={id} className="portfolio__item project-card">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <p className="project-title">{title}</p>
              <p className="project-description">{description}</p>
              <h4 className="tech_stack project-tech-stack">
                <b>{tech}</b>
              </h4>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn project-github-link"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary project-deployed-link"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
