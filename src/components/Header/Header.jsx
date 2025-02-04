import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import { MENU } from "../../utils/Constans/constansLink";

function Header() {
  return (
    <section className="section-heder">
      <div className="conteiner">
        <header className="header">
          <div>
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="header-menu">
            <ul className="header-menu__list">
              <li><NavLink to='/rovers'>Rovers</NavLink></li>
              <li><NavLink to='/planetinfo'>Planet info</NavLink></li>
            </ul>
          </nav>
          <div className="header-link">
            <ul className="header-link__list">
              {MENU.map(({ icon, link }) => (
                <li key={link}>
                  <a href={link} target="__blank">{icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Header;
