import React from "react";

const ModalTableItem = props => (
    <tr>
        <td>{props.i}</td>
        <td>{props.name}</td>
        <td className="text-center">{props.quantity}</td>
        <td className="text-right">{props.value} zł</td>
    </tr>
);

export default ModalTableItem
