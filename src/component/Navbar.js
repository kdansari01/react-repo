// import { Home } from "./Home";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../App";
// import { Profile } from "./Profile";

export const Navbar = () => {
  const { global } = useContext(GlobalContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid nav-sticky">
          <a className="navbar-brand" href="/">
            {/* <img className="img-fluid" src="./image/logo.png"/> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {global.isLogin && <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Profile">
                  Profile
                </NavLink>
              </li> }
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active text-light"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Memories
                </a>
                <ul className="dropdown-menu bg-info">
                  <li>
                    <a className="dropdown-item " href="/">
                      2019
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      2020
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      2021
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      2022
                    </a>
                  </li>
             
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item " href="/">
                      contact us
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light"  href="/">
                   About us
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active text-light"  to="/ContactUs">
                  contact us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success w-50" type="submit">
                Search
              </button>
              {!global.isLogin && <button className="btn btn-outline-danger text-light mx-3 w-50" type="submit">
                 <NavLink className="nav-link text-light" to="/login">
                    Login
                </NavLink>
              </button>              
                }
              {global.isLogin && <button className="btn btn-danger w-50 mx-3">
                    Logout
                </button> 
                }
            </form>
          </div>
        </div>
      </nav>

    </>
  );
};
