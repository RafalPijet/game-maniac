import React from "react";
import Header from "../../presentional/Header/Header";
import "./MainLayout.css";

export class MainLayout extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        );
    }
}
