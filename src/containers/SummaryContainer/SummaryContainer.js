import React from "react";
import { connect } from "react-redux";
import { setSummaryModalState} from "../../actions/values-actions";
import SummaryModal from "../../presentational/SummaryModal/SummaryModal";

class SummaryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSummaryModal: false
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.summaryModalState);
        this.setState({isSummaryModal: nextProps.summaryModalState});
    }

    render() {
        return (
            <SummaryModal summaryModal={this.state.isSummaryModal} basketGames={this.props.basketGames}
                          setSummaryModalState={this.props.setSummaryModalState}/>
        )
    }
}

const MapStateToProps = store => {
    return {
        summaryModalState: store.valuesReducer.summaryModalState,
        basketGames: store.basketReducer
    }
};

const MapDispatchToProps = dispatch => ({
    setSummaryModalState: isTrue => dispatch(setSummaryModalState(isTrue))
});

export default connect(MapStateToProps, MapDispatchToProps)(SummaryContainer);
