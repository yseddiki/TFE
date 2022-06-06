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

const ChartBarBrutes = () => {
    return (
    <div className="gap-4">
        <Chart
                data={{
                    labels:['Emotionnelle', 'Humour', 'Creepy'],
                    datasets:
                    [
                        {
                        label: 'Partie 1 > Partie 2',
                        type: 'bar',
                        data: [0,2,0],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                        label: 'Partie 1 = Partie 2',
                        type: 'bar',
                        data: [0,0,1],
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                        {
                        label: 'Partie 1 < Partie 2',
                        type: 'bar',
                        data: [7,1,3],
                        backgroundColor: 'rgba(53, 12, 235, 0.5)',
                        }
                    ],
                        
                }}
            />
    </div>
 );
}
export default ChartBarBrutes;
