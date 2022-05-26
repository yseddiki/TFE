

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
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const ChartEvaluation = ({data}) => {
    const [ArrayX, setArrayX] = useState([])
    useEffect (() => {
        let lenghtArray = data.length; 
        let dataX = 0;
        let tempArray = [] ;
        data.forEach((element, index) => {
            if(lenghtArray<element.length){
                lenghtArray = element.length;
            }
        })
        for (let index = 0; index < lenghtArray; index++) {
            tempArray.push(dataX)
            dataX++
        }
        setArrayX(tempArray)
    },[data])
    function rgbStringRandom() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }
    
        
    return (<div className="gap-4">
       <Chart
                data={{
                    labels: ArrayX,
                    datasets:
                        [   ...data.map((element, index) => {
                            return{
                                
                                    type: 'line',
                                    label: (index+1),
                                    borderColor: rgbStringRandom(),
                                    borderWidth: 2,
                                    pointRadius: 0,
                                    fill: true,
                                    data: element,
                            }        
                        })
                        ]
                }}
            />
    </div>
    )
}

export default ChartEvaluation;