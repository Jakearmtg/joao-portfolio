import { useEffect } from "react";
import "./Contact.css";
import github from "./images/icongithub.svg";
import linkedin from "./images/iconlinkedin.svg";
import gmail from "./images/icongmail.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="contact-div" data-aos="fade-up">
      <div className="text">
        <a className="contato">Contato</a>
      </div>
      <div className="icons-div" data-aos="fade-up">
        <a href="https://github.com/Jakearmtg">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-rodrigues-santana-63667517b/">
          <img src={linkedin} />
        </a>
        <a href="mailto:joao2000gabriel@gmail.com">
          <img src={gmail} />
        </a>
      </div>
      <p className="copyright">© João Gabriel R. Santana 2024</p>
    </div>
  );
};

export default Contact;
