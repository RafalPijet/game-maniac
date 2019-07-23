import React from "react";

const InputCheckboxComponent = props => (
    <div className="checkbox-item">
        <input type="checkbox" id={props.name}
               onChange={event => props.onChangeTakeId(event.target.id, event.target.checked)}/>
        <label htmlFor={props.name}>{props.name}</label>
    </div>
);

export default InputCheckboxComponent;
