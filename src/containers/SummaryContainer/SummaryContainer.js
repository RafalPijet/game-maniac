import React from "react";
import {connect} from "react-redux";
import {
    setSummaryModalState,
    setDiscountModalState,
    setAfterPayModalState,
    setSupplyCost,
    setDiscount,
    setTotalToPay,
    setDiscountIsCounting
} from "../../actions/values-actions";
import {deleteAllGames} from "../../actions/basket-actions";
import SummaryModal from "../../presentational/SummaryModal/SummaryModal";

class SummaryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            discount: this.props.discount,
            discountInfo: "",
            isHidden: this.props.discountIsCounting
        }
    }

    componentDidMount() {
        !this.props.discountIsCounting ? this.discountHandling() : this.confirmDiscount();
    }

    componentWillReceiveProps(nextProps) {

        if (!nextProps.summaryModalState && !nextProps.discountIsCounting) {
            this.props.setTotalToPay((nextProps.total + nextProps.supplyCost).toFixed(2))
        }

        if (nextProps.discount !== 0 || nextProps.supplyCost === 0) {
            this.confirmDiscount();
        }

        if (!nextProps.discountIsCounting) {
            this.setState({isHidden: nextProps.discountIsCounting})
        }
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

    afterPayHandling() {
        this.props.setAfterPayModalState(false);
        this.props.deleteAllGames();
        this.props.setSupplyCost(14.99);
        this.props.setDiscount(0);
        this.props.setDiscountIsCounting(false);
    }

    payHandling() {
        this.props.setAfterPayModalState(true);
        this.props.setSummaryModalState(false);
        
    }

    saveState = () => new Promise(resolve => resolve(
        this.state.discount === 0 ? this.props.setSupplyCost(0) : this.props.setDiscount(this.state.discount)
    ));

    confirmDiscount() {
        let totalAfterUseDiscount = 0;
        let amount = 0;
        this.saveState()
            .then(() => amount = (this.props.total + this.props.supplyCost) * this.props.discount)
            .then(() => totalAfterUseDiscount = this.props.total + this.props.supplyCost - amount)
            .then(() => this.props.setDiscountModalState(false))
            .then(() => this.props.setDiscountIsCounting(true))
            .then(() => this.setState({isHidden: this.props.discountIsCounting}))
            .then(() => this.props.setTotalToPay(totalAfterUseDiscount.toFixed(2)));
    }

    render() {
        return (
            <SummaryModal summaryModal={this.props.summaryModalState} basketGames={this.props.basketGames}
                          setSummaryModalState={this.props.setSummaryModalState} total={this.props.total}
                          supplyCost={this.props.supplyCost} setDiscountModalState={this.props.setDiscountModalState}
                          discountModal={this.props.discountModalState}
                          payHandling={this.payHandling.bind(this)}
                          afterPayHandling={this.afterPayHandling.bind(this)}
                          afterPayModalState={this.props.afterPayModalState}
                          confirmDiscount={this.confirmDiscount.bind(this)}
                          discountInfo={this.state.discountInfo} isHidden={this.state.isHidden}
                          discount={this.props.discount} totalToPay={this.props.totalToPay}/>
        )
    }
}

const MapStateToProps = store => {
    return {
        summaryModalState: store.valuesReducer.summaryModalState,
        discountModalState: store.valuesReducer.discountModalState,
        afterPayModalState: store.valuesReducer.afterPayModalState,
        discountIsCounting: store.valuesReducer.discountIsCounting,
        basketGames: store.basketReducer,
        supplyCost: store.valuesReducer.supplyCost,
        discount: store.valuesReducer.discount,
        totalToPay: store.valuesReducer.totalToPay,
    }
};

const MapDispatchToProps = dispatch => ({
    setSummaryModalState: isTrue => dispatch(setSummaryModalState(isTrue)),
    setDiscountModalState: isTrue => dispatch(setDiscountModalState(isTrue)),
    setAfterPayModalState: isTrue => dispatch(setAfterPayModalState(isTrue)),
    setSupplyCost: value => dispatch(setSupplyCost(value)),
    setDiscount: value => dispatch(setDiscount(value)),
    setTotalToPay: value => dispatch(setTotalToPay(value)),
    setDiscountIsCounting: isTrue => dispatch(setDiscountIsCounting(isTrue)),
    deleteAllGames: () => dispatch(deleteAllGames())
});

export default connect(MapStateToProps, MapDispatchToProps)(SummaryContainer);
