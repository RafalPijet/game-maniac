import React from "react";
import InputCheckboxComponent from "../../presentational/InputCheckboxComponent/InputCheckboxComponent";
import "./SelectCheckboxComponent.css";
import pc from "../../data/pictures/logo_pc.png";
import ps3 from "../../data/pictures/logo_ps3.png";
import ps4 from "../../data/pictures/logo_ps4.png";
import xbox360 from "../../data/pictures/logo_xbox_360.png";
import xboxOne from "../../data/pictures/logo_xbox_one.png";

const SelectCheckboxComponent = props => (
    <div className="checkbox-main">
        <InputCheckboxComponent name="logo_pc" logo={pc} onChangeTakeId={props.checkboxElementsHandling} isChecked={true}/>
        <InputCheckboxComponent name="logo_ps3" logo={ps3} onChangeTakeId={props.checkboxElementsHandling} isChecked={true}/>
        <InputCheckboxComponent name="logo_ps4" logo={ps4} onChangeTakeId={props.checkboxElementsHandling} isChecked={true}/>
        <InputCheckboxComponent name="logo_xbox_360" logo={xbox360} onChangeTakeId={props.checkboxElementsHandling}
                                isChecked={true}/>
        <InputCheckboxComponent name="logo_xbox_one" logo={xboxOne} onChangeTakeId={props.checkboxElementsHandling}
                                isChecked={true}/>
    </div>
);

export default SelectCheckboxComponent;
