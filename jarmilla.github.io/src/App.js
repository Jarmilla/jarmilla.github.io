import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="home">
        <h1>Adrienn Bodorné Deme </h1>
        <h2>Junior Frontend developer desire to learn more and interest in games and art</h2>
      </div>

      <div className="projects">
        <div>
          <h2>Nasa pictures</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
          <img src="" alt="" />
        </div>

        <div>
          <h2>Ryuutama</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
          <img src="" alt="" />
        </div>
      </div>

      <div className="contact">
        <p>Github:</p>
        <p>linkedIn:</p>
      </div>
    </div>
  );
}

export default App;
