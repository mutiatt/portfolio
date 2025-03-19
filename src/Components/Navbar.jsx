import React from "react";
import { Link } from "react-router-dom";
import "../Pages/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const handleNavItemClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
          style={{ backgroundColor: "#ff7f00", border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {["Home", "Services", "Projects", "Contact"].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={`/${item === "Home" ? "" : item}`}
                  className="nav-link text-light"
                  onClick={handleNavItemClick}
                  style={{
                    // backgroundColor: "#ff7f00",
                    borderRadius: "5px",
                    padding: "5px",
                    display: "block",
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
