import React from "react";
import SelectRadioComponent from "../../presentational/SelectRadioComponent/SelectRadioComponent";

const SortComponent = props => (
    <div>
        <h3>Sortuj:</h3>
        <SelectRadioComponent radioElementsHandling={props.radioElementsHandling}/>
    </div>
);

export default SortComponent;
