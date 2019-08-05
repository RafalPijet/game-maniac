import React from "react";
import ContactComponent from "../../presentational/ContactComponent/ContactComponent";
import contactData from "../../data/contact";

export class Contact extends React.Component {
    render() {
        return <ContactComponent employees={contactData}/>
    }
}
