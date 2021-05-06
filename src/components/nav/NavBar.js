import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()
    const currentUser = JSON.parse(sessionStorage.getItem("Bliss_User"))
    const handleLogout = () => {
        clearUser();
        history.push('/');
    }

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/"> Home </Link>
            </li>
            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/posts"> Browse </Link>
                </li>
                : null}

            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to={`/profiles/${currentUser}`}> Profile </Link>
                </li>
                : null}
            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/about"> About us </Link>
                </li>
                : null}
            {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login"> Login </Link>
                </li>}
        </ul>
    );
};

export default withRouter(NavBar);