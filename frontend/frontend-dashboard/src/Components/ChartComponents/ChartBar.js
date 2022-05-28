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
                        label: 'Partie 1 > Partie 2',
                        type: 'bar',
                        data: [1,2,0],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                        label: 'Partie 1 = Partie 2',
                        type: 'bar',
                        data: [1,1,0],
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                        {
                        label: 'Partie 1 < Partie 2',
                        type: 'bar',
                        data: [5,0,3],
                        backgroundColor: 'rgba(53, 12, 235, 0.5)',
                        }
                    ],
                        
                }}
            />
    </div>
 );
}
export default ChartBar;
