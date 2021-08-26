import "./App.css";
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
          <div>
            <h2>Nasa pictures</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
              over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
            <img src="" alt="" />
          </div>

          <div>
            <h2>Ryuutama</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
              over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
            <img src="" alt="" />
          </div>

          <div>
            <h2>Nasa pictures</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
              over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
            <img src="" alt="" />
          </div>
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
