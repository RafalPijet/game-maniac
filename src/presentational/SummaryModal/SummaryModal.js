import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalTable from "../ModalTable/ModalTable";
import "./SummaryModal.css";

const SummaryModal = props => (
    <div>
        <Modal size="lg" isOpen={props.summaryModal}>
            <div className="modal-header">
                <h4>Podsumowanie zamówienia</h4>
                <Button color="danger" size="sm" onClick={() => props.setSummaryModalState(false)}>X</Button>
            </div>
            <ModalBody>
                <ModalTable basketGames={props.basketGames}/>
            </ModalBody>
        </Modal>
    </div>
);

export default SummaryModal;
