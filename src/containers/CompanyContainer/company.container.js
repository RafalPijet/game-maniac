import React from "react";
import CompanyComponent from "../../presentational/CompanyComponent/CompanyComponent";
import aboutUs from "../../data/aboutUs";

export class Company extends React.Component {
    render() {
        return <CompanyComponent aboutUs={aboutUs}/>
    }
}
