import React from "react";
import "./Total.css";

const Total = props => (
    <div hidden={props.hidden}>
        <div className="total-main">
            <div className="total-info">
                <h3>TOTAL: {props.total} zł</h3>
                <button>Zapłać</button>
            </div>    
        </div>
    </div>
);

export default Total;
