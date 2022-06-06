

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Title,
    registerables as registerablesJS
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
ChartJS.register(...registerablesJS);
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const ChartUser = ({data}) => {
    const [ArrayX, setArrayX] = useState([])
    const [ArrayAverage, setArrayAverage] = useState([])
    const [arrayData, setArrayData] = useState([])
    const [arrayAverageFirstPart, setarrayAverageFirstPart] = useState([])
    const [arrayAverageSecondPart, setarrayAverageSecondPart] = useState([])
    useEffect(() => {
        if(data)
        {
            let dataX = 0;
            setArrayData(data.map((element=> element)))
            setArrayX(data.map((element) => dataX++)) 
            setArrayAverage(createAverageLine(data))
        }
    },[data])
    
    function createAverageLine(data) {
        let average = Math.round(getAverageData(data));
        let dataAverage = [];
        data.map((element) => dataAverage.push(average))
        return dataAverage;
    }
    function getAverageData(data) {
        let average = 0;
        data.map((element) => average += element)
        return average / data.length;
    }
    function createFirstAndSecondAverageLine (dataArray){
        let averageFirstPart = dataArray.slice(0, dataArray.length/2);
        let averageSecondPart = dataArray.slice(dataArray.length/2, dataArray.length);
        let averageFirstPartAverage = Math.round(getAverageData(averageFirstPart));
        let averageSecondPartAverage = Math.round(getAverageData(averageSecondPart));
        let dataAverageFirstPart = [];
        let dataAverageSecondPart = [];
        averageFirstPart.map((element) => dataAverageFirstPart.push(averageFirstPartAverage))
        averageFirstPart.map((element) => dataAverageSecondPart.push(null))
        averageSecondPart.map((element) => dataAverageSecondPart.push(averageSecondPartAverage))
        setarrayAverageFirstPart(dataAverageFirstPart)
        setarrayAverageSecondPart(dataAverageSecondPart)
    }
    useEffect(() => {
        if(data)
        {
            createFirstAndSecondAverageLine(arrayData)
        }
    },[arrayData])
    return (
    <div className="gap-4">
        <Chart
                data={{
                    labels: ArrayX,
                    datasets:
                        [
                            {
                                type: 'line',
                                label: 'rythme cardiaque',
                                borderColor: 'rgb(255, 99, 132)',
                                borderWidth: 2,
                                fill: false,
                                data: data,
                            },
                            {
                                type: 'line',
                                pointRadius: 0,
                                label: 'moyenne',
                                borderColor: 'rgb(53, 162, 235)',
                                borderWidth: 2,
                                fill: true,
                                data: ArrayAverage,
                            },
                            {
                                type: 'line',
                                pointRadius: 0,
                                label: 'moyenne premiere partie',
                                borderColor: 'rgb(32, 22, 176)',
                                borderWidth: 2,
                                fill: true,
                                data: arrayAverageFirstPart,
                            }
                            ,
                            {
                                type: 'line',
                                pointRadius: 0,
                                label: 'moyenne deuxieme partie',
                                borderColor: 'rgb(255, 186, 5)',
                                borderWidth: 2,
                                fill: true,
                                data: arrayAverageSecondPart,
                            }                        
                        ]
                }}
            />   
    </div>
    )
}

export default ChartUser;