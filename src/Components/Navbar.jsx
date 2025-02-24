import React from "react";
import { Link } from "react-router-dom";
import "../Pages/style.css";
// import logo from "../images/logo.JPG";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md  fixed-top sticky">
        <div className="container-xxl">
         {/* <a><img src={logo} className="navbar-brand rounded" width={40} height={40}></img></a> */}
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        < Link to ="/" className="nav-link active text-light" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Services" className="nav-link text-light">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link to ="/Projects" className="nav-link text-light" href="#">Projects</Link>
                        </li>
                        <li className="nav-item">
                        <Link to= "/Contact" className="nav-link text-light">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
  );
};

export default Navbar;
