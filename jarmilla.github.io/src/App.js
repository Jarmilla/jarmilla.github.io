import "./App.scss";
import heartLogo from "./img/heart.png";
import { projects } from "./data/Projects";
import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={heartLogo} alt="logo" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <div id="home">
          <h1>Adrienn Bodorné Deme </h1>
          <h2>Junior Frontend developer desire to learn more and interest in games and art</h2>
        </div>

        <div id="projects">
          {projects.map((project) => (
            <ProjectDisplay project={project} key={project.name} />
          ))}
        </div>

        <div id="contact">
          <p>Github:</p>
          <p>linkedIn:</p>
        </div>
      </main>
    </div>
  );
}

export default App;
