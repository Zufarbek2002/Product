import "./Header.scss";
import logo from "../../assets/logo_img.svg";
import darkMode from "../../assets/darkMode_img.svg";

function Header() {
  return (
    <div className="container header__container">
      <div className="header__logo">
        <img src={logo} alt="header logo" />
        <h1 className="header__logo_text">Product</h1>
      </div>

      <label htmlFor="check" className="icons icons_open">
        <i className="fa-solid fa-bars fa-2xl menu_bar"></i>
      </label>
      <input type="checkbox" name="check" id="check" />
      <label htmlFor="check" className="parda"></label>

      <ul className="header__nav">
        <label htmlFor="check" className="icons icons_close">
        <i className="fa-solid fa-xmark fa-2xl menu_bar"></i>
        </label>
        <li className="header__list">
          <a href="#" className="header__link header__link--active">
            Product
          </a>
        </li>
        <li className="header__list">
          <a href="#" className="header__link">
            Customers
          </a>
        </li>
        <li className="header__list">
          <a href="#" className="header__link">
            Pricing
          </a>
        </li>
        <li className="header__list">
          <a href="#" className="header__link">
            Resources
          </a>
        </li>
        <li className="header__list">
          <a href="#" className="header__btn">
            Sign In
          </a>
        </li>
        <li className="header__list">
          <a href="#" className="header__btn">
            Sign Up
          </a>
        </li>
        <li className="header__list">
          <img src={darkMode} alt="dark mode img" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
