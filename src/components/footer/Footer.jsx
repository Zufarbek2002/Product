import "./Footer.scss";
import footerImg from "../../assets/screen.png"

function Footer() {
  return (
    <div className="footer">
      <div className="container container__footer">
        <div className="footer__text_box">
          <h2 className="footer__title">
            Join 100 Compannies who boost their business with Product
          </h2>
            <button className="footer__btn">Get This</button>
        </div>
        <div className="footer__img">
            <img src={footerImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
