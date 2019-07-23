import React from "react";
import SelectRadioComponent from "../../presentational/SelectRadioComponent/SelectRadioComponent";
import SelectCheckboxComponent from "../../presentational/SelectCheckboxComponent/SelectCheckboxComponent";
import "./SortComponent.css";

const SortComponent = props => (
    <div className="sort-main">
        <h3>Sortuj:</h3>
        <SelectRadioComponent radioElementsHandling={props.radioElementsHandling}/>
        <SelectCheckboxComponent checkboxElementsHandling={props.checkboxElementsHandling}/>
    </div>
);

export default SortComponent;
