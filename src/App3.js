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
import ModelComponent from './components/ModelComponent';

//const [data, setData] = useState([])


export function App() {
    const [show, setShow] = useState(false);
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
                            <Button key={players.id} variant={"primary"} onClick={handleShow}>See Stats</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <ModelComponent />
        </>
    );
}
export default App;
