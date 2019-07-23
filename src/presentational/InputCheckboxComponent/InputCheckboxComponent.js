import React from "react";

const InputCheckboxComponent = props => (
    <div className="checkbox-item">
        <input type="checkbox" id={props.name} defaultChecked={props.isChecked}
               onChange={event => props.onChangeTakeId(event.target.id, event.target.checked)}/>
        <label htmlFor={props.name}><img className="checkbox-logo" src={props.logo} alt={props.name}/></label>
    </div>
);

export default InputCheckboxComponent;
