import React from "react";
import InputRadioComponent from "../InputRadioComponent/InputRadioComponent";
import "./SelectRadioComponent.css";

const SelectRadioComponent = props => (
    <div className="select-radio-main">
        <form>
            <InputRadioComponent option="noSelect" name="sortSelect" isChecked={true} label="Brak"
                                 onChangeTakeId={props.radioElementsHandling}/>
            <InputRadioComponent option="aTOz" name="sortSelect" isChecked={false} label="Nazwa A-Z"
                                 onChangeTakeId={props.radioElementsHandling}/>
            <InputRadioComponent option="zTOa" name="sortSelect" isChecked={false} label="Nazwa Z-A"
                                 onChangeTakeId={props.radioElementsHandling}/>
            <InputRadioComponent option="upPrice" name="sortSelect" isChecked={false} label="Cena rosnąco"
                                 onChangeTakeId={props.radioElementsHandling}/>
            <InputRadioComponent option="downPrice" name="sortSelect" isChecked={false} label="Cena malejąca"
                                 onChangeTakeId={props.radioElementsHandling}/>
        </form>
    </div>
);

export default SelectRadioComponent;
