import React from "react";
import RegulationItem from "../RegulationItem/RegulationItem";
import "./RegulationsList.css";

const RegulationsList = props => (
    <div className="regulations-main">
        <h2 className="text-center col-12 m-4 text-uppercase">Regulamin</h2>
        {props.regulations.map((content, i) => (
            <RegulationItem key={i} i={i} content={content}/>
        ))}
    </div>
);

export default RegulationsList
