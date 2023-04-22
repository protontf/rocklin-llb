import players from "../players.json";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, {Component} from "react";

class ModelComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            name: '',
            id: '',
            data: []
        }
    }
    handleShow = () => {
        this.setState({
            show: true,
            name: 'hello'
        })
    }
    render() {
        return (
                <Modal show={this.props.show}>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card className={"m-2"} style={{ width: '18rem' }}>
                            <Card.Img variant={"top"} src={players.imagesrc} />
                            <Card.Body>
                                <Card.Title>{players.name}</Card.Title>
                                <Card.Text>this.players.id</Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        )
    }

}
export default ModelComponent;