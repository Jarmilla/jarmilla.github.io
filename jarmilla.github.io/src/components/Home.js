import "../scss/Home.scss";

function Home() {
  return (
    <div id="home">
      <div className="grid-dodecagon">
        <div className="yellow box1"></div>
        <div className="yellow  box2"></div>
        <div className="primary-color box3"></div>
        <div className="secondary-color box4"></div>
        <div className="secondary-color box5"></div>
        <div className="yellow box6"></div>
        <div className="primary-color box7"></div>
      </div>

      <div className="intoduction">
        <h1>Adrienn Bodorné Deme </h1>
        <h2>Frontend developer desire to learn more</h2>
        <h2>Interest in games and art</h2>
      </div>
    </div>
  );
}

export default Home;
