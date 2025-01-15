import { useEffect } from "react";
import "./Project.css";
import weather from "./images/weather.png";
import taskmanager from "./images/taskmanager.png";
import usepop from "./images/usepopcorn.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <h1 className="projetostext" data-aos="fade-up">
        Projetos
      </h1>

      <div className="projects-div">
        <a href="https://jakearmtg.github.io/WeatherApp/">
          {" "}
          <div className="project1" data-aos="fade-right">
            <img src={weather} />
            <p>
              Aplicativo feito com ReactJS que utiliza uma api externa com dados
              de um satélite para mostrar a previsão do tempo personalizada para
              cada cidade
            </p>
          </div>
        </a>
        <a href="https://jakearmtg.github.io/TodoList/">
          <div className="project2" data-aos="fade-left">
            <img src={taskmanager} />
            <p>
              lista de afazeres feita com ReactJS onde é possível adicionar,
              excluir, alterar e filtrar uma lista de afazeres personalizada
            </p>
          </div>
        </a>
        <a href="https://jakearmtg.github.io/pipoca-react/">
          <div className="project3" data-aos="fade-right">
            <img src={usepop} />
            <p>
              App feito com ReactJS para dar nota aos filmes assistidos, essa
              aplicação utiliza uma api externa para ter os dados referente aos
              filmes
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
