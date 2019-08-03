import React from "react";
import data from "../../data/regulations";
import RegulationsList from "../../presentational/RegulationsList/RegulationsList";

export class Regulations extends React.Component {
    render() {
        return <RegulationsList regulations={data}/>
    }
}
