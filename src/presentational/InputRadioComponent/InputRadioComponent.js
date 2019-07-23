import React from "react";

const InputRadioComponent = props => (
    <div className="input-radio-item">
        <input type="radio" id={props.option} name={props.name} defaultChecked={props.isChecked}
               onChange={event => props.onChangeTakeId(event.target.id)}/>
        <label className="input-radio-label" htmlFor={props.option}>{props.label}</label>
    </div>
);

export default InputRadioComponent;
