import React from "react";

const InputCheckboxComponent = props => (
    <div className="checkbox-item">
        <input className="checkbox-input" type="checkbox" id={props.name} defaultChecked={props.isChecked}
               onChange={event => props.onChangeTakeId(event.target.id, event.target.checked)}
               onClick={() => props.setSearchState(false)}/>
        <label htmlFor={props.name}><img className="checkbox-logo" src={props.logo} alt={props.name}
                                         onClick={() => props.setSearchState(false)}/></label>
    </div>
);

export default InputCheckboxComponent;
