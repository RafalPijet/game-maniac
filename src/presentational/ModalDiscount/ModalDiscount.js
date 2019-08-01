import React from "react";
import {Button, Modal} from "reactstrap";

const ModalDiscount = props => (
    <Modal isOpen={props.discountModal}>
        <div className="modal-header">
            <h4 className="m-0">Kod rabatowy</h4>
            <Button color="danger" size="sm" onClick={() => props.setDiscountModalState(false)}>X</Button>
        </div>
        <h4 className="text-center">{props.discountInfo}</h4>
        <div className="modal-footer">
            <Button color="success" onClick={() => props.confirmDiscount()}>Użyj</Button>
        </div>
    </Modal>
);

export default ModalDiscount;
    
