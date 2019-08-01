import React from "react";
import {Button, Modal} from "reactstrap";

class ModalAfterPay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalToPay: ""
        }
    }

    componentWillReceiveProps(nextProps) {

        if (!isNaN(nextProps.totalToPay)) {
            this.setState({totalToPay: this.props.totalToPay});
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.afterPayModalState}>
                <div className="modal-header">
                    <h4 className="m-0">Potwierdzenie zapłaty</h4>
                </div>
                <h4 className="text-center p-2">Zapłata kwoty {this.state.totalToPay} zł przebiegła prawidłowo</h4>
                <h4 className="text-center">Dziekujemy za zakupy w naszym sklepie</h4>
                <div className="modal-footer">
                    <Button color="success" onClick={() => this.props.afterPayHandling()}>OK</Button>
                </div>
            </Modal>
        )
    }
}

export default ModalAfterPay;
