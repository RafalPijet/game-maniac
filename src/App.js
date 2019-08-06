import React from "react";
import {connect} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MainLayout} from "./containers/MainLayout/MainLayout";
import {Home} from "./containers/HomeContainer/home.container";
import {Faq} from "./containers/FaqContainer/faq.container";
import {Regulations} from "./containers/RegulationsContainer/regulations.container";
import {Contact} from "./containers/ContactContainer/contact.container";
import BasketContainer from "./containers/BasketContainer/basket.container";
import {Company} from "./containers/CompanyContainer/company.container";
import NoMatch from "./presentational/NoMatch/NoMatch";
import GameBoxDetailsContainer from "./containers/GameBoxDetailsContainer/GameBoxDetailsContainer";
import {addInitialGames, addGames} from "./actions/games-actions";
import {setPagesCount} from "./actions/values-actions";
import gamesData from "./data/games";

class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(addInitialGames(gamesData));
        this.props.dispatch(addGames(gamesData));
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.props.dispatch(setPagesCount(Math.ceil(nextProps.games.length / 8)))
    }

    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/faq"} component={Faq}/>
                        <Route exact path={"/regulamin"} component={Regulations}/>
                        <Route exact path={"/kontakt"} component={Contact}/>
                        <Route exact path={"/basket"} component={BasketContainer}/>
                        <Route exact path={"/company"} component={Company}/>
                        <Route exact path={"/game/:id"} component={GameBoxDetailsContainer}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        )
    }
}

const MapStateToProps = store => {
    return {
        games: store.gamesReducer.games
    }
};

export default connect(MapStateToProps)(App);
