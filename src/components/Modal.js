import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../App.css";
import "../bootstrap.min.css"
import {CardGroup} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const PlayerModal = ({ id, onClose }) => {
    // Define the data directly within the component or import it from another file
    const data = [
        { id: 1, name: 'Yggy', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 2, name: 'Levi', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 3, name: 'Dylan', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 4, name: 'Brandon', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 5, name: 'Nick', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 6, name: 'Emmett', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 7, name: 'Kaden', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 8, name: 'Leo', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 9, name: 'Anthony', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 10, name: 'Raylen', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 11, name: 'Jack', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' },
        { id: 12, name: 'Zach', avg: '1', hits: '1', walks: '1', singles: '1', doubles: '1', triples: '1', imagesrc: '/images/padres_logo.png' }
    ];

    const entry = data.find((entry) => entry.id === id);

    if (!entry) {
        return (
            <Modal show={true} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>No data found for ID {id}</Modal.Title>
                </Modal.Header>
            </Modal>
        );
    }

    return (
        <Modal show={true} onHide={onClose} dialogClassName={"modal-90w"} aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title className="padres-color">{entry.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className={"m-2 no-border"}>
                    <Navbar bg="none" expand="lg" variant="light">
                        <Container className="justify-content-center">
                            <Navbar.Brand>
                                <img
                                    alt={entry.name}
                                    src={entry.imagesrc}
                                    height="20%"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </Container>
                    </Navbar>

                    <Card.Title className="padres-color">Batting Stats</Card.Title>
                    <CardGroup className={"d-flex flex-wrap justify-content-center"}>
                        <Card className={"m-2 border border-warning"}>
                            <Card.Body>
                                <Card.Title className="padres-color">Batting Avg.</Card.Title>
                                <Card.Text className="padres-color">{entry.avg}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"m-2 border border-warning"}>
                            <Card.Body>
                                <Card.Title className="padres-color">Hits</Card.Title>
                                <Card.Text className="padres-color">{entry.hits}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"m-2 border border-warning"}>
                            <Card.Body>
                                <Card.Title className="padres-color">Walks</Card.Title>
                                <Card.Text className="padres-color">{entry.walks}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"m-2 border border-warning"}>
                            <Card.Body>
                                <Card.Title className="padres-color">Singles</Card.Title>
                                <Card.Text className="padres-color">{entry.singles}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"m-2 border border-warning"}>
                            <Card.Body>
                                <Card.Title className="padres-color">Doubles</Card.Title>
                                <Card.Text className="padres-color">{entry.doubles}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"m-2 border border-warning"}>
                            <Card.Body>
                                <Card.Title className="padres-color">Triples</Card.Title>
                                <Card.Text className="padres-color">{entry.triples}</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default PlayerModal;