import React, { useEffect } from "react";
import "./Aboutme.css";
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
import document from "./images/icondocument.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutme = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="about-div" data-aos="fade-up">
      <h1>Olá, eu sou o João Gabriel Rodrigues Santana</h1>
      <h2>
        Desenvolvedor <span className="full">Front-end</span>{" "}
      </h2>
      <p>
        Engenheiro de Software apaixonado por desenvolvimento front-end. Com
        sólida formação e experiência em HTML, CSS, JavaScript e React, crio
        interfaces intuitivas e experiências digitais excepcionais. Acredito que
        a tecnologia tem o poder de transformar o mundo e estou sempre buscando
        novos desafios para aprimorar minhas habilidades.
      </p>
    </div>
  );
};

export default Aboutme;
