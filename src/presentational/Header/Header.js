import React from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import BasketIcon from "../../data/icons/shopping-basket-solid.svg";
import Logo from "../../data/icons/maniac-logo.png";
import "./Header.css";

const Header = props => {
    return (
        <div className="header-main">
            <nav>
                <Link className="logo" to="/company"><img src={Logo} alt="logo"/></Link>
                <NavLink className="item" exact to="/" activeClassName="active">HOME</NavLink>
                <NavLink className="item" exact to="/faq" activeClassName="active">FAQ</NavLink>
                <NavLink className="item" exact to="/regulamin" activeClassName="active">REGULAMIN</NavLink>
                <NavLink className="item" exact to="/kontakt" activeClassName="active">KONTAKT</NavLink>
                <div className="header-basket">
                    <Link className="basket" to="/basket"><img className="icon" src={BasketIcon} alt="basket"/></Link>
                    <p className="basket-counter">{props.basketGames.length}</p>
                </div>
            </nav>
        </div>
    )
};

const MapStateToProps = store => {
    return {
        basketGames: store.basketReducer
    }
};

export default connect(MapStateToProps)(Header);
