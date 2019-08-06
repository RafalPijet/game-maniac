import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.css";

const Footer = () => (
    <div className="footer-main">
        <h5 className="author">2019 © Rafał Pijet</h5>
        <nav>
            <NavLink className="footer-item" exact to="/company" activeClassName="active-footer">O NAS</NavLink>
            <NavLink className="footer-item" exact to="/" activeClassName="active-footer">HOME</NavLink>
            <NavLink className="footer-item" exact to="/faq" activeClassName="active-footer">FAQ</NavLink>
            <NavLink className="footer-item" exact to="/regulamin" activeClassName="active-footer">REGULAMIN</NavLink>
            <NavLink className="footer-item" exact to="/kontakt" activeClassName="active-footer">KONTAKT</NavLink>
        </nav>
    </div>
);

export default Footer;
