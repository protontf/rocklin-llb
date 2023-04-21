// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

const labels = ['Red', 'Orange', 'Blue']
const data = {
    labels: labels,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(0,0,255)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
}
const PieChart = () => {
    return (
        <div>
            <Pie data={data} />
        </div>
    );
};
export default PieChart;