import "./Strategy.scss";
import strategyImg from "../../assets/card_img.png";

function Strategy() {
  return (
    <div className="strategy">
      <div className="container strategy__container">
        <h2 className="strategy__title">Contents Strategies</h2>
        <p className="stategy__sub_text">
          We focus on ergonomics and meeting you where you work. It`s only a
          keystroke away.
        </p>
        <div className="strategy__cards">
          <div className="strategy__card">
            <img src={strategyImg} alt="" />
            <div className="strategy__card_text_box">
              <p className="strategy__card_text">
                By <span>Wahid Ari</span> | 03 March 2019
              </p>
              <h3 className="strategy__card_title">
                Increasing Prosperity With Positive Thinking
              </h3>
            </div>
          </div>

          <div className="strategy__card">
            <img src={strategyImg} alt="" />
            <div className="strategy__card_text_box">
              <p className="strategy__card_text">
                By <span>Wahid Ari</span> | 03 March 2019
              </p>
              <h3 className="strategy__card_title">
                Increasing Prosperity With Positive Thinking
              </h3>
            </div>
          </div>

          <div className="strategy__card">
            <img src={strategyImg} alt="" />
            <div className="strategy__card_text_box">
              <p className="strategy__card_text">
                By <span>Wahid Ari</span> | 03 March 2019
              </p>
              <h3 className="strategy__card_title">
                Increasing Prosperity With Positive Thinking
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strategy;
