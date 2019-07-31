import React from "react";
import { Table } from "reactstrap";
import ModalTableItem from "../ModalTableItem/ModalTableItem";

const ModalTable = props => (
    <Table hover>
        <thead>
            <tr>
                <th>Lp</th>
                <th>Tytuł</th>
                <th className="text-center">Sztuk</th>
                <th className="text-right">Wartość</th>
            </tr>
        </thead>
        <tbody>
            {props.basketGames.map((basketGame, i) => (
                <ModalTableItem key={i} i={i + 1} name={basketGame.game.name} quantity={basketGame.quantity}
                value={(basketGame.game.price * basketGame.quantity).toFixed(2)}/>
            ))}
        </tbody>
    </Table>
);

export default ModalTable;
