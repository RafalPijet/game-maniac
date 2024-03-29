import React from "react";

const InputRadioComponent = props => (
    <div className="input-radio-item">
        <input className="input-radio" type="radio" id={props.option} name={props.name} defaultChecked={props.isChecked}
               onChange={event => props.onChangeTakeId(event.target.id)} onClick={() => props.setSearchState(false)}/>
        <label className="input-radio-label" htmlFor={props.option}
               onClick={() => props.setSearchState(false)}>{props.label}</label>
    </div>
);

export default InputRadioComponent;
