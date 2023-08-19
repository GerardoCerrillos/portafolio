import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="welcome">Welcome</h1>
      <p className="my__name">My name is Gerardo Cerrillos</p>
      <div className="info__personal">
        <p>
          I would like to introduce myself with the following profile: I just
          started in this world of developing front end and back end , during my
          training process I was able to master different technologies. I am
          willing to work in an organized way hand to hand with the enterprise ,
          always open to learn new technologies as well as improve my skills.
        </p>
      </div>
      <p className="info__name">My Technologies</p>
      <div className="info__technology">
        <img className="img__css" src="/css1.png" alt="css" />
        <img className="img__js" src="/js-format1.png" alt="js" />
        <img className="img__html" src="/html1.png" alt="html" />
        <img className="img__react" src="/react1.png" alt="react" />
      </div>
      <h2 className="my__proyect">My proyect</h2>
      <div className="container__proyect">
        <div className="img__pro">
          <a href="https://gerasclim.netlify.app/" target="_blank">
            <img className="img" src="/clim.png" alt="clim" />
          </a>
        </div>
        <div className="img__pro">
          <a href="https://pokex-del-gerardo.netlify.app/" target="_blank">
            <img className="img" src="/poke.png" alt="poke" />
          </a>
        </div>
        <div className="img__pro">
          <a href="https://fortunecookiegerardo.netlify.app/" target="_blank">
            <img className="img" src="/fortune.png" alt="fortune" />
          </a>
        </div>
        <div className="img__pro">
          <a href="https://rickandmortyofgerardo.netlify.app/" target="_blank">
            <img className="img" src="/rick.png" alt="rick&morty" />
          </a>
        </div>
      </div>
      <div className="container__contact">
        <a
          target="_blank"
          href="https://github.com/GerardoCerrillos?tab=repositories"
        >
          <img className="img__git" src="/github1.png" alt="github" />
        </a>
        <a href="http://wa.me/525534176994" target="_blanck">
          <img src="/whatsapp1.png" alt="whats" className="img__whats" />
        </a>
      </div>
    </div>
  );
}

export default App;
