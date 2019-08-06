import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import "./CarouselSlide.css";

const CarouselSlide = props => (
    <div className="carousel-main">
        <img src={props.src} alt={props.name}/>
        <div className="carousel-cell">
            <h3>{props.price + " zł"}</h3>
            <Link to={/game/ + props.id}><Button color="info">Sprawdź</Button></Link>
        </div>
    </div>
);

export default CarouselSlide;
