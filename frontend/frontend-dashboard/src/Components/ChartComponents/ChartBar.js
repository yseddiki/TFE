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

const ChartBar = () => {
    return (
    <div className="gap-4">
        <Chart
                data={{
                    labels:['Emotionelle', 'Humour', 'Creepy'],
                    datasets:
                    [
                        {
                        label: 'moyenne de la premiere partie de la video  > moyenne de la seconde partie de la video',
                        type: 'bar',
                        data: [1,2,0],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                        label: 'moyenne de la premiere partie de la video  = moyenne de la seconde partie de la video',
                        type: 'bar',
                        data: [2,1,2],
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                        {
                        label: 'moyenne de la premiere partie de la video  < moyenne de la seconde partie de la video',
                        type: 'bar',
                        data: [4,0,1],
                        backgroundColor: 'rgba(53, 12, 235, 0.5)',
                        }
                    ],
                        
                }}
            />
    </div>
 );
}
export default ChartBar;
