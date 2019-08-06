import React from "react";
import {Collapse, Card, CardBody} from "reactstrap";

class FaqComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.togglerNavbar = this.togglerNavbar.bind(this)
    }

    togglerNavbar() {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        return (
            <div>
                <h3 className="ask" onClick={this.togglerNavbar}>{this.props.ask + "?"}</h3>
                <Collapse isOpen={!this.state.collapsed}>
                    <Card>
                        <CardBody>{this.props.answer}</CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}

export default FaqComponent;
