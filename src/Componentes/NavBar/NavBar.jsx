import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to="/">
                        <h1 className="navbar-brand">FRIGHOR</h1>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-0 mb-0 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/categoria/1">
                                    Mc Cain
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/categoria/2">
                                    Benedicti
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/categoria/3">
                                    Dolce Neve
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget />
        </header>
    );
};

export default NavBar;
