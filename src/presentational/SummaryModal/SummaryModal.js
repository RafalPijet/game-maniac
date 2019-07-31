import React from "react";
import {Button, Modal, ModalBody} from "reactstrap";
import ModalTable from "../ModalTable/ModalTable";
import ModalTotal from "../ModalTotal/ModalTotal";
import "./SummaryModal.css";

const SummaryModal = props => (
    <Modal size="lg" isOpen={props.summaryModal}>
        <div className="modal-header">
            <h4 className="m-0">Podsumowanie zamówienia</h4>
            <Button color="danger" size="sm" onClick={() => props.setSummaryModalState(false)}>X</Button>
        </div>
        <ModalBody>
            <ModalTable basketGames={props.basketGames}/>
            <ModalTotal discount={props.discount} total={props.total} supplyCost={props.supplyCost}/>
        </ModalBody>
        <div className="modal-footer">
            <Button hidden={props.isHidden} color="info" onClick={() => props.setDiscountModalState(true)}>Sprawdź kod rabatowy</Button>
            <Button className="text-uppercase" color="success">Zapłać</Button>
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
        </div>
    </Modal>
);

export default SummaryModal;
