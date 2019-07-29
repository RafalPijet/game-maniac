import React from "react";
import Header from "../../presentational/Header/Header";
import Footer from "../../presentational/Footer/Footer"
import "./MainLayout.css";

export class MainLayout extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
