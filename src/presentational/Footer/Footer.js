import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
    <div className="footer-main">
        <h5 className="author">2019 © Rafał Pijet</h5>
        <nav>
            <NavLink className="footer-item" exact to="/company" activeClassName="active">O NAS</NavLink>
            <NavLink className="footer-item" exact to="/" activeClassName="active">HOME</NavLink>
            <NavLink className="footer-item" exact to="/faq" activeClassName="active">FAQ</NavLink>
            <NavLink className="footer-item" exact to="/regulamin" activeClassName="active">REGULAMIN</NavLink>
            <NavLink className="footer-item" exact to="/kontakt" activeClassName="active">KONTAKT</NavLink>
        </nav>
    </div>
);

export default Footer;
