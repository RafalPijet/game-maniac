import React from "react";
import InputRadioComponent from "../InputRadioComponent/InputRadioComponent";
import "./SelectRadioComponent.css";

const SelectRadioComponent = props => (
    <div className="select-radio-main">
        <form>
            <InputRadioComponent option="noSelect" name="sortSelect" isChecked={true} label="Brak"
                                 onChangeTakeId={props.radioElementsHandling} setSearchState={props.setSearchState}/>
            <InputRadioComponent option="aTOz" name="sortSelect" isChecked={false} label="Nazwa A-Z"
                                 onChangeTakeId={props.radioElementsHandling} setSearchState={props.setSearchState}/>
            <InputRadioComponent option="zTOa" name="sortSelect" isChecked={false} label="Nazwa Z-A"
                                 onChangeTakeId={props.radioElementsHandling} setSearchState={props.setSearchState}/>
            <InputRadioComponent option="upPrice" name="sortSelect" isChecked={false} label="Cena rosnąco"
                                 onChangeTakeId={props.radioElementsHandling} setSearchState={props.setSearchState}/>
            <InputRadioComponent option="downPrice" name="sortSelect" isChecked={false} label="Cena malejąca"
                                 onChangeTakeId={props.radioElementsHandling} setSearchState={props.setSearchState}/>
        </form>
    </div>
);

export default SelectRadioComponent;
