import { useEffect } from "react";
import iconjs from "./images/iconjs.svg";
import iconnode from "./images/iconnode.svg";
import iconreact from "./images/iconreact.svg";
import iconhtml from "./images/iconhtml.svg";
import iconcss from "./images/iconcss.svg";
import iconsql from "./images/iconsql.svg";
import iconpostgre from "./images/iconpostgre.svg";
import iconbootstrap from "./images/iconbootstrap.svg";
import iconpython from "./images/iconpython.svg";
import icongit from "./images/icongit.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skills.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className="skills" data-aos="fade-up">
        <h1>Skills</h1>
      </div>
      <div className="skills-div">
        <div className="stack-icons" data-aos="fade-up">
          <img className="icon-js" src={iconjs} />
          <img src={iconreact} />
          <img src={iconhtml} />
          <img src={iconcss} />
          <img src={iconbootstrap} />
          <img src={icongit} />
          <img src={iconnode} />
          <img src={iconsql} />
          <img src={iconpostgre} />
          <img src={iconpython} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
