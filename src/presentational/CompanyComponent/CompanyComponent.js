import React from "react";
import "./CompanyComponent.css";
import { Link } from "react-router-dom";

const CompanyComponent = props => (
    <div className="company-main">
        <h1 className="p-4">O nas</h1>
        <h4 className="mt-5">Szanowni Państwo</h4>
        <div>
            {props.aboutUs.map((content, i) => (
                <h5 className="text-justify p-4" key={i}>{content}</h5>
            ))}
        </div>
        <h5 className="text-justify p4 mt-5">Wszystkich korzystających z naszych usług po raz pierwszy prosimy o
            zapoznanie się z działem <Link to="/regulamin">REGULAMIN.</Link></h5>
    </div>
);

export default CompanyComponent;
