import React from "react";
import "./ContactComponent.css";
import {Table} from "reactstrap";

const ContactComponent = props => (
    <div className="contact-main">
        <h1 className="m-5">Kontakt:</h1>
        <div className="m-5">
            <h4 className="text-center"> Sklep z grami - GAME MANIAC</h4>
            <h5 className="text-center">Grzegorza Brzęczyszczykiewicza 1</h5>
            <h5 className="text-center">00-600 Warszawa</h5>
        </div>
        <h5>Sklep czynny: pn.-pt. 11:00, sob. 10:00-15:00</h5>
        <h5 className="m-5">Telefoniczne biuro obsługi klienta (obsługa zamówień wysyłkowych) - 22 111-11-11 (10:00 -
            17:00)</h5>
        <h5 className="m-5">Adresy do korespondencji elektronicznej:</h5>
        <Table className="employees" dark>
            <tbody>
            {props.employees.map((employe, i) => (
                <tr key={i}>
                    <td className="text-center p-4">{employe.position}</td>
                    <td className="text-center p-4">{employe.name}</td>
                    <td className="text-center p-4">{employe.kom}</td>
                    <td className="text-center p-4"><a href={"mailto:" + employe.email}>{employe.email}</a></td>
                </tr>
            ))}
            </tbody>
        </Table>
    </div>
);

export default ContactComponent;
