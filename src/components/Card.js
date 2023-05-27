// Card.js
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../App.css";
import "../bootstrap.min.css"
const PlayerCard = ({ id, name, jersey, openModal }) => {
    return (
        <div className={"d-flex flex-wrap justify-content-center"}>
        <Card className={"m-2 border border-warning"} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="padres-color">{name}</Card.Title>
                <Card.Text className="padres-color">{jersey}</Card.Text>
                <Button variant={"primary"} onClick={() => openModal(id)}>See Stats</Button>
            </Card.Body>
        </Card>
        </div>
    );
};
export default PlayerCard;