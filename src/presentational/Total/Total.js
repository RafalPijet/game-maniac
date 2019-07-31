import React from "react";
import "./Total.css";
import SummaryContainer from "../../containers/SummaryContainer/SummaryContainer";

const Total = props => (
    <div hidden={props.hidden}>
        <div className="total-main">
            <div className="total-info">
                <h3>Do zapłaty: {props.total} zł</h3>
                <p className="supply-cost">(bez kosztów dostawy)</p>
                <button className="buy-now" onClick={() => props.setSummaryModalState(true)}>Kup teraz</button>
            </div>
        </div>
        <SummaryContainer/>
    </div>
);

export default Total;
