import "./Product.scss";
import productImg from "../../assets/icon.png";

function Product() {
  return (
    <div className="product">
      <div className="container product__container">
        <h2 className="product__title">
          Product was Built Specifically for You
        </h2>
        <div className="product__cards">
          <div className="product__card">
            <img src={productImg} alt="" />
            <div className="product__card_text">
              <h3 className="product__sub_title">First click tests</h3>
              <p className="product__text">
                While most people enjoy casino gambling,
              </p>
            </div>
          </div>

          <div className="product__card">
            <img src={productImg} alt="" />
            <div className="product__card_text">
              <h3 className="product__sub_title">First click tests</h3>
              <p className="product__text">
                While most people enjoy casino gambling,
              </p>
            </div>
          </div>

          <div className="product__card">
            <img src={productImg} alt="" />
            <div className="product__card_text">
              <h3 className="product__sub_title">First click tests</h3>
              <p className="product__text">
                While most people enjoy casino gambling,
              </p>
            </div>
          </div>

          <div className="product__card">
            <img src={productImg} alt="" />
            <div className="product__card_text">
              <h3 className="product__sub_title">First click tests</h3>
              <p className="product__text">
                While most people enjoy casino gambling,
              </p>
            </div>
          </div>
        </div>

        <a href="#" className="hero__link_btn product__btn">
          SIGN UP NOW
        </a>
      </div>
    </div>
  );
}

export default Product;
