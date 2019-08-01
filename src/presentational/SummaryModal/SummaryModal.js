import React from "react";
import {Button, Modal, ModalBody} from "reactstrap";
import ModalTable from "../ModalTable/ModalTable";
import ModalTotal from "../ModalTotal/ModalTotal";
import ModalAfterPay from "../ModalAfterPay/ModalAfterPay";
import ModalDiscount from "../ModalDiscount/ModalDiscount";
import "./SummaryModal.css";

const SummaryModal = props => (
    <div>
        <Modal size="lg" isOpen={props.summaryModal}>
            <div className="modal-header">
                <h4 className="m-0">Podsumowanie zamówienia</h4>
                <Button color="danger" size="sm" onClick={() => props.setSummaryModalState(false)}>X</Button>
            </div>
            <ModalBody>
                <ModalTable basketGames={props.basketGames}/>
                <ModalTotal discount={props.discount} total={props.total} supplyCost={props.supplyCost}
                            totalToPay={props.totalToPay}/>
            </ModalBody>
            <div className="modal-footer">
                <Button hidden={props.isHidden} color="info"
                        onClick={() => props.setDiscountModalState(true)}>Sprawdź kod rabatowy</Button>
                <Button className="text-uppercase" color="success" onClick={() => props.payHandling()}>Zapłać</Button>
                <ModalDiscount discountModal={props.discountModal} setDiscountModalState={props.setDiscountModalState}
                               discountInfo={props.discountInfo} confirmDiscount={props.confirmDiscount}/>
            </div>
        </Modal>
        <ModalAfterPay afterPayModalState={props.afterPayModalState} totalToPay={props.totalToPay}
                       afterPayHandling={props.afterPayHandling}/>
    </div>
);

export default SummaryModal;
