import React from "react";
import ShowPriceComponent from "../../presentational/ShowPriceComponent/ShowPriceComponent";
import "./GameBox.css";

class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusStyle: "",
            statusIsHidden: false
        }
    }
    componentDidMount() {
        this.statusHandling(this.props.game.status)
    }

    statusHandling(status) {

        if (status === "promocja") {
            this.setState({
                statusStyle: "box-status-promotion",
                statusIsHidden: false
            })
        } else if (status === "nowość") {
            this.setState({
                statusStyle: "box-status-novelty",
                statusIsHidden: false
            })
        } else if (status === "ostatnia sztuka") {
            this.setState({
                statusStyle: "box-status-last-item",
                statusIsHidden: false
            })
        } else {
            this.setState({statusIsHidden: true})
        }
    }

    render() {
        return (
            <div className="box-main">
                <img className="box-image" src={this.props.game.image} alt={this.props.game.name}/>
                <h3 className="box-name">{this.props.game.name}</h3>
                <h5 hidden={this.state.statusIsHidden} className={this.state.statusStyle}>{this.props.game.status}</h5>
                <div className="box-row">
                    <img src={this.props.game.platform} alt="logo"/>
                    <ShowPriceComponent price={this.props.game.price} oldPrice={this.props.game.oldPrice}/>
                </div>
            </div>
        )
    }
}

export default GameBox;

