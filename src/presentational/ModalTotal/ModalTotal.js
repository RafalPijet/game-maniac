import React from "react";
import "./ModalTotal.css";

const ModalTotal = props => (
    <div className="modal-total-main">
        <h5 className="text-right">{props.total} zł</h5>
        <h6 className="text-right">Koszty dostawy: {props.supplyCost} zł</h6>
        <h6 className="text-right">Rabat: {(props.discount * 100).toFixed(0)} %</h6>
        <h5 className="text-right text-uppercase">razem do zapłaty: {(props.total + props.supplyCost)} zł</h5>
    </div>
);

export default ModalTotal;
