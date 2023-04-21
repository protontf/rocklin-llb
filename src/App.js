// App.js <PieChart />
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import players from './players.json'
// import PieChart from "./components/PieChart";
import "./App.css";
import "./bootstrap.min.css"
// import {data} from "../utils/Data";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
Chart.register(CategoryScale);

export function PlayerDetails() {
    return (
        <div className={"d-flex flex-wrap"}>
        {players?.map((players) => (
            <div className="card m-2" style={{width: 18 + 'rem'}}>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{players.name}</h5>
                </div>
            </div>
        ))}
        </div>
    )
}

export function NewCards() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant={"top"} src={"./logo512.png"} />
            <Card.Body>
                <Card.Title>Hello</Card.Title>
                <Card.Text>Here is some text</Card.Text>
                <Button variant={"primary"}>Do something</Button>
            </Card.Body>
        </Card>
    )
}
export default function App() {
    return (
        <div>
            <PlayerDetails />
            <NewCards />
        </div>
    );
}

