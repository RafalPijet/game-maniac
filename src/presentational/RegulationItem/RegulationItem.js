import React from "react";

const ReagulationItem = props => (
    <div className="regulation-item">
        <p className="text-right col-1 font-weight-bold">{props.i}</p>
        <p className="text-justify col-11 text-capitalize">{props.content}</p>
    </div>
);

export default ReagulationItem
