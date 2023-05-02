// App.js
import React, { useState } from 'react';
import players from './players.json'
import "./App.css";
import "./bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Navbar from 'react-bootstrap/Navbar';

export function PlayerDetails() {
    return (
        <>
            <Container fluid="xl">
                <Row xs={2} md={2} className="g-4 justify-content-center">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <div className={"d-flex flex-wrap justify-content-center"}>
                                {players?.map((players) => (
                                    <Card className={"m-2 border border-warning"}>
                                        <Card.Body>
                                            <Card.Title className="padres-color">{players.name}</Card.Title>
                                            <Card.Text className="padres-color">Jersey #: {players.jersey}</Card.Text>
                                            <Card className={"m-2"}>
                                                <Card.Body>
                                                    <Card.Title>Stats</Card.Title>
                                                    <Card.Text>this it shwere the batting average and other stats go insid ehte crat that is created</Card.Text>

                                                </Card.Body>
                                            </Card>
                                            <Card className={"m-2"}>
                                                <Card.Body>
                                                    <Card.Title>Stats</Card.Title>
                                                    <Card.Text>Strike %: 86%</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default function App() {

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="light">
                <Container className="justify-content-center">
                    <Navbar.Brand>
                        <img
                            alt="Rocklin LLB Padres"
                            src="/images/padres_logo.png"
                            height="100"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <PlayerDetails />
            <Footer />
        </>
    );
}

