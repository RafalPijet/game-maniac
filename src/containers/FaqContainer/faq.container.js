import React from "react";
import FaqComponent from "../../presentational/FaqComponent/FaqComponent";
import faqData from "../../data/faqData";
import "../../presentational/FaqComponent/FaqComponent.css";

export class Faq extends React.Component {

    render() {
        return (
            <div className="faq-main">
                {faqData.map((faq, i) => (
                    <FaqComponent key={i} ask={faq.ask} answer={faq.answer}/>
                ))}
            </div>
        )
    }
}
