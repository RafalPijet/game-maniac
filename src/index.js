import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./containers/MainLayout/MainLayout";
import { Home } from "./containers/HomeContainer/home.container";
import { Faq } from "./containers/FaqContainer/faq.container";
import { Regulations } from "./containers/RegulationsContainer/regulations.container";
import { Contakt} from "./containers/ContaktContainer/contakt.container";
import { Basket } from "./containers/BasketContainer/basket.container";
import { Company } from "./containers/CompanyContainer/company.container";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/faq"} component={Faq} />
                        <Route exact path={"/regulamin"} component={Regulations} />
                        <Route exact path={"/kontakt"} component={Contakt} />
                        <Route exact path={"/basket"} component={Basket} />
                        <Route exact path={"/company"} component={Company} />
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById("root"));
