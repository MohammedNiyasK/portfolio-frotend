import "./Header.css";
import {
  Link,
} from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav-logo">
            Niyas
          </a>

          <div className="nav-bar active">
            <ul className="nav-list">
              <li className="nav-item active-link">
                <Link to="/" className="nav-link">
                  <i className="bx bx-home"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                <i className='bx bx-pen'></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/works" className="nav-link">
                  <i className="bx bx-briefcase-alt-2"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <i className="bx bx-message-alt-detail"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
