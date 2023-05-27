// AppModal.js
import React, { useState } from 'react';
import PlayerCard from "./components/Card";
import PlayerModal from "./components/Modal";
import "./App.css";
import "./bootstrap.min.css"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
const App = () => {
    const [selectedId, setSelectedId] = useState(null);

    const openModal = (id) => {
        setSelectedId(id);
    };

    const closeModal = () => {
        setSelectedId(null);
    };

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
            <div className={"d-flex flex-wrap justify-content-center"}>
                <PlayerCard id={1} name="Yggy" jersey="Jersey #: 2" openModal={openModal} />
                <PlayerCard id={2} name="Levi" jersey="Jersey #: 6" openModal={openModal} />
                <PlayerCard id={3} name="Dylan" jersey="Jersey #: 5" openModal={openModal} />
                <PlayerCard id={4} name="Brandon" jersey="Jersey #: 10" openModal={openModal} />
                <PlayerCard id={5} name="Nick" jersey="Jersey #: 11" openModal={openModal} />
                <PlayerCard id={6} name="Emmett" jersey="Jersey #: 8" openModal={openModal} />
                <PlayerCard id={7} name="Kaden" jersey="Jersey #: 3" openModal={openModal} />
                <PlayerCard id={8} name="Leo" jersey="Jersey #: 7" openModal={openModal} />
                <PlayerCard id={9} name="Anthony" jersey="Jersey #: 9" openModal={openModal} />
                <PlayerCard id={10} name="Raylen" jersey="Jersey #: 1" openModal={openModal} />
                <PlayerCard id={11} name="Jack" jersey="Jersey #: 4" openModal={openModal} />
                <PlayerCard id={12} name="Zach" jersey="Jersey #: 12" openModal={openModal} />
                {selectedId && <PlayerModal id={selectedId} onClose={closeModal} /> }
            </div>
            <Footer />
        </>
    );
};
export default App;