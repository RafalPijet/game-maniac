import React from "react";
import "./ShowPriceComponent.css";

class ShowPriceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price,
            mainPrice: "",
            fractionPrice: ""
        };
    }
    componentDidMount() {
        this.priceHandling()
    }

    priceHandling() {
        const priceText = this.state.price.toString();
        this.setState({
            mainPrice: priceText.substring(0, priceText.length - 3),
            fractionPrice: priceText.substring(priceText.length - 2, priceText.length)
        });
    }

    render() {
        return (
            <div className="show-price-main">
                <h1 className="price-item">{this.state.mainPrice}</h1>
                <h4 className="old-price-item">{this.props.oldPrice}</h4>
                <div className="show-price-fraction">
                    <h5 className="fraction-item">{this.state.fractionPrice}</h5>
                    <h5 className="fraction-item">ZŁ</h5>
                </div>
            </div>
        )
    }
}


export default ShowPriceComponent;
