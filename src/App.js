// App.js
import React, { useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import players from './players.json'
// import PieChart from "./components/PieChart";
import "./App.css";
import "./bootstrap.min.css"
// import {data} from "../utils/Data";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

Chart.register(CategoryScale);

export function PlayerDetails() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className={"d-flex flex-wrap justify-content-center"}>

            {players?.map((players) => (

                <Card className={"m-2"} style={{ width: '18rem' }}>
                    <Card.Img variant={"top"} src={players.imagesrc} />
                    <Card.Body>
                        <Card.Title>{players.name}</Card.Title>
                        <Card.Text>Jersey #: {players.jersey}</Card.Text>
                        <Button variant={"primary"} onClick={handleShow}>See Stats</Button>
                    </Card.Body>
                </Card>
            ))}
                {players?.map((players) => (
                <Modal show={show} onHide={handleClose} dialogClassName={"modal-90w"} aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <Card className={"m-2"} style={{ width: '18rem' }}>
                                <Card.Img variant={"top"} src={players.imagesrc} />
                                <Card.Body>
                                    <Card.Title>{players.name}</Card.Title>
                                    <Card.Text>{players.id}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                ))}
            </div>
        </>
    )
}

export function NewCards() {


    return (
        <Card className={"m-2"} style={{ width: '18rem' }}>
            <Card.Img variant={"top"} src={"./logo512.png"} />
            <Card.Body>
                <Card.Title>Hello</Card.Title>
                <Card.Text>Here is some text</Card.Text>
                <Button variant={"primary"}>See Stats</Button>
            </Card.Body>
        </Card>
    )
}
export default function App() {

    return (
        <>
            <PlayerDetails />
        </>
    );
}

