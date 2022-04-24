

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

const ChartIndexesEvents = () => {
    return (<div className="gap-4">
        <Chart
            data={{
                labels: ["1", "2" , "3" , "4","5", "6" , "7" , "8","9", "10" , "11" , "12","13", "14" , "15"],
                datasets: [{
                    type: 'line',
                    label: 'average',
                    borderColor: "rgb(255,0,0)",
                    borderWidth: 2,
                    fill: false,
                    data:  ["65", "72" , "82" , "94","65", "72" , "82" , "94","65", "72" , "82" , "94","65", "72" , "82" ]
                }]
            }}
        />
    </div>
    )
}

export default ChartIndexesEvents