import "../../styles/global.css";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav className="menu panel">
        <div className="menu__logo">
          <a href="index.html" className="menu__logo-link">
            Aldo Zolev
          </a>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">
              sobre mi
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              música y conciertos
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              tienda
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
