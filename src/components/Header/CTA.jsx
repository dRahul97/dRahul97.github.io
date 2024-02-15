import React from "react";
import Resume from "../../assets/Rahul-Dudka-Resume.pdf";

const CTA = () => {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1WndJReS9UjQ1N1W9L-NB53CbCtrFRbmp/view?usp=sharing"
    );
  };
  return (
    <div className="cta">
      <a
        id="resume-button-2"
        onClick={handleResume}
        href={Resume}
        className="btn"
        download={"Rahul-Dudka-Resume"}
        target="_blank"
      >
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
