// App.js
import React, { useState } from 'react';
import players from './players.json'
import "./App.css";
import "./bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function PlayerDetails() {
    return (
        <>
            <div className={"d-flex flex-wrap justify-content-center"}>
            {players?.map((players) => (
                <Card className={"m-2"} style={{ width: '16rem' }}>
                    <Card.Img variant={"top"} src={players.imagesrc} style={{ width: '8rem' }}/>
                    <Card.Body>
                        <Card.Title>{players.name}</Card.Title>
                        <Card.Text>Jersey #: {players.jersey}</Card.Text>
                        <Card className={"m-2"} style={{ width: '90%' }}>
                            <Card.Body>
                                <Card.Title>Stats</Card.Title>
                                <Card.Text>Batting Avg: .112</Card.Text>

                            </Card.Body>
                        </Card>
                        <Card className={"m-2"} style={{ width: '90%' }}>
                            <Card.Body>
                                <Card.Title>Stats</Card.Title>
                                <Card.Text>Strike %: 86%</Card.Text>

                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </>
    )
}

export default function App() {

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt="Rocklin LLB Padres"
                            src="/images/padres_logo.png"
                            height="80"
                            className="d-inline-block align-top"
                            />{' '}
                    </Navbar.Brand>
                    <h2>Rocklin LIttle league</h2>
                    <Navbar.Brand>Minor AAA</Navbar.Brand>
                </Container>
            </Navbar>
            <PlayerDetails />
        </>
    );
}

