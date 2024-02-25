import "./Client.scss";
import clientIconImg from "../../assets/client_icon.svg";
import personImg from "../../assets/person_img.png";

function Client() {
  return (
    <div className="client">
      <div className="container client__container">
        <h2 className="client__title">What Clients Say</h2>
        <p className="client__sub_title">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="client__cards">
          <div className="client__card">
            <img src={clientIconImg} alt="" />
            <p className="client__card_text">
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="card__box">
              <img src={personImg} alt="" />
              <div className="card__box_text">
                <h3 className="card__box_title">Wahid Ari</h3>
                <p className="card__box_sub_text">Designer</p>
              </div>
            </div>
          </div>

          <div className="client__card">
            <img src={clientIconImg} alt="" />
            <p className="client__card_text">
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="card__box">
              <img src={personImg} alt="" />
              <div className="card__box_text">
                <h3 className="card__box_title">Wahid Ari</h3>
                <p className="card__box_sub_text">Designer</p>
              </div>
            </div>
          </div>

          <div className="client__card">
            <img src={clientIconImg} alt="" />
            <p className="client__card_text">
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="card__box">
              <img src={personImg} alt="" />
              <div className="card__box_text">
                <h3 className="card__box_title">Wahid Ari</h3>
                <p className="card__box_sub_text">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
