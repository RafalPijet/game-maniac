import React from "react";

const ModalTableItem = props => (
    <tr>
        <th scope="row">{props.i}</th>
        <th>{props.name}</th>
        <th className="text-center">{props.quantity}</th>
        <th className="text-right">{props.value} zł</th>
    </tr>
);

export default ModalTableItem
