import React from "react";
import { Link } from "react-router-dom";
import BasketIcon from "../../data/icons/shopping-basket-solid.svg";
import Logo from "../../data/icons/maniac-logo.png";
import "./Header.css";

const Header = props => {
    return (
        <div className="header-main">
            <nav>
                <Link className="logo" to="/company"><img src={Logo} alt="logo"/></Link>
                <Link className="item" to="/">HOME</Link>
                <Link className="item" to="/faq">FAQ</Link>
                <Link className="item" to="/regulamin">REGULAMIN</Link>
                <Link className="item" to="/kontakt">KONTAKT</Link>
                <Link className="basket" to="/basket"><img className="icon" src={BasketIcon} alt="basket"/></Link>
            </nav>
        </div>
    )
};

export default Header;
