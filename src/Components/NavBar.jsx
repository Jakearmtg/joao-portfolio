import { useEffect } from "react";
import "./Navbar.css";
import logo from "./images/joao4.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const scrollToSection = (id, event) => {
    event.preventDefault();

    const section = document.getElementById(id);
    const offset = 100; // Ajuste esse valor conforme necessário

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <header className="header" data-aos="fade-up">
      <a
        onClick={(e) => scrollToSection("aboutme", e)}
        href="#aboutme"
        className="logo"
      >
        <img src={logo} />
      </a>
      <nav className="navbar">
        <a onClick={(e) => scrollToSection("aboutme", e)} href="#aboutme">
          Sobre mim
        </a>
        <a onClick={(e) => scrollToSection("skill", e)} href="#skill">
          Skills
        </a>
        <a onClick={(e) => scrollToSection("projects", e)} href="#projects">
          Projetos
        </a>
        <a onClick={(e) => scrollToSection("contact", e)} href="#contact">
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
