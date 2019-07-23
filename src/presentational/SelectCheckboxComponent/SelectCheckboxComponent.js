import React from "react";
import InputCheckboxComponent from "../../presentational/InputCheckboxComponent/InputCheckboxComponent";
import "./SelectCheckboxComponent.css";

const SelectCheckboxComponent = props => (
    <div className="checkbox-main">
        <InputCheckboxComponent className="checkbox-item" name="PC" onChangeTakeId={props.checkboxElementsHandling}/>
        <InputCheckboxComponent name="PS3" onChangeTakeId={props.checkboxElementsHandling}/>
        <InputCheckboxComponent name="PS4" onChangeTakeId={props.checkboxElementsHandling}/>
        <InputCheckboxComponent name="Xbox" onChangeTakeId={props.checkboxElementsHandling}/>
    </div>
);

export default SelectCheckboxComponent;
