import React from 'react';
import PlayerModal from './components/child';
import { Button } from 'react-bootstrap';
import { useState } from "react";
import './App.css'
import players from './players.json'

export default function App() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState('');
    const handleShow = () => {
        setShow(true);
    }
    const handleData = () => {
        setData(JSON.stringify(players));
    }
    return (
        <div>
            <PlayerModal handleShow={show} handleData={data}/>
            <Button primary onClick={() => {
                handleShow();
                handleData();
                }}>Click Parent</Button>
        </div>
    )
}