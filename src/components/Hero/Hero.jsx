import "../../styles/global.css";
import "./Hero.css";
export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="img-container">
          <img  src="../img/main/TAO.png" alt="hero" />
          <p>desde el 25 de diciembre</p>
        </div>
        <div className="text-hero">
          <h1>
            Hi, I'm <span>John Doe</span>
          </h1>
          <p>
            I'm a <span>Web Developer</span>
          </p>
          <a href="#">Contact Me</a>
        </div>
      </section>
    </>
  );
};
