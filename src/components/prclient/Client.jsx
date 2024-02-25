import "./Client.scss";
import clientIconImg from "../../assets/client_icon.svg";

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
            </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
