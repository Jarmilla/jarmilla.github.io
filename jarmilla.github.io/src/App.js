import "./scss/App.scss";
import heartLogo from "./img/heart.png";
import gitLogo from "./img/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
import linkedInLogo from "./img/linkedin-Light-32px.png";
import ProjectDisplay from "./components/ProjectDisplay";
import { projects } from "./data/Projects";
import Home from "./components/Home";

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
        <Home />

        <div id="projects">
          {projects.map((project) => (
            <ProjectDisplay key={project.name} project={project} gitLogo={gitLogo} />
          ))}
        </div>
      </main>

      <footer id="contact">
        <div className="credit">
          <p> © 2021. Jarmilla</p>
          <p>BG photos from Unsplash</p>
        </div>
        <ul>
          <li>
            <a href="https://github.com/Jarmilla" target="blank">
              Github <img src={gitLogo} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adrienn-deme-bodorn%C3%A9/" target="blank">
              LinkedIn <img src={linkedInLogo} alt="LinedIn icon made by Freepik from www.flaticon.com" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
