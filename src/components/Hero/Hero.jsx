import Countdown from "../Countdown/Countdown";
import "../../styles/global.css";
import "./Hero.css";
export const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-container">
        <div className="img-container">
          <img src="../img/main/TAO.png" alt="hero" />
          <p>desde el 25 de diciembre</p>
        </div>
        <div className="hero-contador">
          <h1 className="hero-title">¡La cuenta regresiva ha comenzado,en:</h1>

          <div className="hero-container">
            <div>
              <p>
                Conéctate a este <br />
                viaje sonoro!
              </p>
              <button>Reservar</button>
            </div>

            <Countdown />
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
