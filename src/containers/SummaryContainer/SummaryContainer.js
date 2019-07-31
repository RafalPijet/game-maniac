import React from "react";
import { connect } from "react-redux";
import { setSummaryModalState, setDiscountModalState, setSupplyCost, setDiscount, setTotal } from "../../actions/values-actions";
import SummaryModal from "../../presentational/SummaryModal/SummaryModal";

class SummaryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            discount: 0,
            discountInfo: "",
            isHidden: false,
            totalAfterUseDiscount: 0
        }
    }

    componentDidMount() {
        this.discountHandling();
    }

    discountHandling() {
        const discountOptions = [0, .02, .04, .06, .08, .10, .12, .14, .16, .18, .20];
        let randomNumber = discountOptions[(Math.random() * 10).toFixed(0)];

        if (randomNumber === 0) {
            this.setState({discountInfo: "Darmowa dostawa"})
        } else {
            this.setState({
                discount: randomNumber,
                discountInfo: "Masz kod rabatowy na " + (randomNumber * 100).toFixed(0) + "% upustu."
            })
        }
    };

    saveState = () => new Promise(resolve => resolve(
        this.state.discount === 0 ? this.props.setSupplyCost(0) : this.props.setDiscount(this.state.discount)
    ));

    confirmDiscount() {
        let amount = 0;
        this.saveState()
            .then(() =>
                amount = (this.props.total + this.props.supplyCost) * this.props.discount)
            .then(() => this.setState({totalAfterUseDiscount: this.props.total + this.props.supplyCost - amount}))
            .then(() => this.props.setDiscountModalState(false))
            .then(() => this.setState({isHidden: true}))
            .then(() => this.props.setTotal(this.state.totalAfterUseDiscount))

            .then(() => console.log(this.state.totalAfterUseDiscount))
            .then(() => console.log(this.props.total));
    }

    render() {
        return (
            <SummaryModal summaryModal={this.props.summaryModalState} basketGames={this.props.basketGames}
                          setSummaryModalState={this.props.setSummaryModalState} total={this.props.total}
                          supplyCost={this.props.supplyCost} setDiscountModalState={this.props.setDiscountModalState}
                          discountModal={this.props.discountModalState} confirmDiscount={this.confirmDiscount.bind(this)}
                          discountInfo={this.state.discountInfo} isHidden={this.state.isHidden}
                          discount={this.props.discount}/>
        )
    }
}

const MapStateToProps = store => {
    return {
        summaryModalState: store.valuesReducer.summaryModalState,
        discountModalState: store.valuesReducer.discountModalState,
        basketGames: store.basketReducer,
        supplyCost: store.valuesReducer.supplyCost,
        discount: store.valuesReducer.discount
    }
};

const MapDispatchToProps = dispatch => ({
    setSummaryModalState: isTrue => dispatch(setSummaryModalState(isTrue)),
    setDiscountModalState: isTrue => dispatch(setDiscountModalState(isTrue)),
    setSupplyCost: value => dispatch(setSupplyCost(value)),
    setDiscount: value => dispatch(setDiscount(value)),
    setTotal: value => dispatch(setTotal(value))
});

export default connect(MapStateToProps, MapDispatchToProps)(SummaryContainer);
