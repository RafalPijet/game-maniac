import React from "react";

const InputRadioComponent = props => (
    <div>
        <input type="radio" id={props.option} name={props.name} defaultChecked={props.isChecked}
               onChange={event => props.onChangeTakeId(event.target.id)}/>
        <label htmlFor={props.option}>{props.label}</label>
    </div>
);

export default InputRadioComponent;
