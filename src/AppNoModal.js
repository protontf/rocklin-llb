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
import {CardGroup} from "react-bootstrap";

export function PlayerDetails() {
    return (
        <>
            <Container fluid="xl">
                <Row xs={1} md={1} xxl={1} className="g-4 justify-content-center">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <div className={"d-flex flex-wrap justify-content-center"}>
                                {players?.map((players) => (
                                    <Card className={"m-2 border border-warning"}>
                                        <Card.Body>
                                            <Card.Title className="padres-color">{players.name}</Card.Title>
                                            <Card.Text className="padres-color">Jersey #: {players.jersey}</Card.Text>
                                            <Card className={"m-2"}>
                                                <Card.Title className="padres-color">Hitting Stats</Card.Title>
                                                <Row xs={1} xxl={1} className="g-4 justify-content-center">
                                                    {Array.from({ length: 1 }).map((_, idx) => (
                                                        <Col>
                                                            <CardGroup>
                                                        <Card className={"m-2"}>
                                                            <Card.Body>
                                                                <Card.Text>Batting Avg</Card.Text>
                                                                <Card.Text>{players.battingavg}</Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                        <Card className={"m-2"}>
                                                            <Card.Body>
                                                                <Card.Text>At Bats</Card.Text>
                                                                <Card.Text>{players.atbats}</Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                        <Card className={"m-2"}>
                                                            <Card.Body>
                                                                <Card.Text>Hits</Card.Text>
                                                                <Card.Text>{players.bathits}</Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                        <Card className={"m-2"}>
                                                            <Card.Body>
                                                                <Card.Text>Singles</Card.Text>
                                                                <Card.Text>{players.batsingles}</Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                        <Card className={"m-2"}>
                                                            <Card.Body>
                                                                <Card.Text>Doubles</Card.Text>
                                                                <Card.Text>{players.batdoubles}</Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                        <Card className={"m-2"}>
                                                            <Card.Body>
                                                                <Card.Text>Triples</Card.Text>
                                                                <Card.Text>{players.battriples}</Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                        <Card className={"m-2"}>
                                                            <Card.Body>
                                                                <Card.Text>Home Runs</Card.Text>
                                                                <Card.Text>{players.bathomeruns}</Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                        <Card className={"m-2"}>
                                                            <Card.Body>
                                                                <Card.Text>Walks</Card.Text>
                                                                <Card.Text>{players.batwalks}</Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                    </CardGroup>
                                                        </Col>
                                                        ))}
                                                </Row>

                                            </Card>
                                            <Card className={"m-2"}>
                                                <Card.Title className="padres-color">Pitching Stats</Card.Title>
                                                <CardGroup>
                                                    <Card className={"m-2"}>
                                                        <Card.Body>
                                                            <Card.Text>Batting Avg</Card.Text>
                                                            <Card.Text>{players.battingavg}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                    <Card className={"m-2"}>
                                                        <Card.Body>
                                                            <Card.Text>At Bats</Card.Text>
                                                            <Card.Text>{players.atbats}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                    <Card className={"m-2"}>
                                                        <Card.Body>
                                                            <Card.Text>Hits</Card.Text>
                                                            <Card.Text>{players.bathits}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                    <Card className={"m-2"}>
                                                        <Card.Body>
                                                            <Card.Text>Singles</Card.Text>
                                                            <Card.Text>{players.batsingles}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                    <Card className={"m-2"}>
                                                        <Card.Body>
                                                            <Card.Text>Doubles</Card.Text>
                                                            <Card.Text>{players.batdoubles}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                    <Card className={"m-2"}>
                                                        <Card.Body>
                                                            <Card.Text>Triples</Card.Text>
                                                            <Card.Text>{players.battriples}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                    <Card className={"m-2"}>
                                                        <Card.Body>
                                                            <Card.Text>Home Runs</Card.Text>
                                                            <Card.Text>{players.bathomeruns}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                    <Card className={"m-2"}>
                                                        <Card.Body>
                                                            <Card.Text>Walks</Card.Text>
                                                            <Card.Text>{players.batwalks}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                </CardGroup>
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

