import "./Hero.scss";
import heroImg from "../../assets/amico.png";
import triangle from "../../assets/Triangle.png";

function Hero() {
  return (
    <div className="container hero__container">
      <div className="hero__text_box">
        <h2 className="hero__title">Work at the speed of thought</h2>
        <p className="hero__text">
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="btn_box">
          <a href="#" className="hero__link_btn">Get started</a>
          <div className="btn_box_link">
            <img src={triangle} alt="Triangle img" />
            <a href="#" className="watch_link">Watch the Video</a>
          </div>
        </div>
      </div>
      <div className="hero__img_box">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
