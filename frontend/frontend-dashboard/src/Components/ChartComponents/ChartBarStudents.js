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
import ArrayUtilisateurs from "../../Data/ArrayUtilisateurs";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const ChartBarStudents = ({type}) => {
    const [labels, setLabels]  = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const colorArray = ["rgb(255,0,0)", "rgb(0,255,0)"]

    function getAverageData(data) {
        let average = 0;
        data.map((element) => average += element)
        return Math.round(average / data.length) ;
    }
    function loadLabels() {
        let data = [];
        ArrayUtilisateurs.filter(element => element.typeVideo === type).map((element) => data.push("Utilisateur : "+element.idUser))
        console.log(data)
        setLabels(data)
    }
    function loadData() {
        let dataFirst = [];
        let dataSeconde = [];
        ArrayUtilisateurs.filter(element => element.typeVideo === type).map((element) => dataFirst.push(getAverageData(element.data.slice(0, element.data.length/2)) ))
        ArrayUtilisateurs.filter(element => element.typeVideo === type).map((element) => dataSeconde.push(getAverageData(element.data.slice(element.data.length/2, element.data.length))))
        console.log(dataFirst)
        console.log(dataSeconde)
        setData1(dataFirst)
        setData2(dataSeconde)
    }
    useEffect(() => {
        loadLabels();
        loadData();
    }, [])

    return (
    <div className="gap-4">
        <Chart
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Moyenne premiére partie de la vidéo ',
                            type:'bar',
                            data: data1,
                            backgroundColor: colorArray[0],
                            borderColor: colorArray[0],
                            borderWidth: 1,
                            pointRadius: 0,
                            fill: true,
                        }
                        
                    ,
                        {
                            label: 'Moyenne deuxiéme partie de la vidéo ',
                            type:'bar',
                            data: data2,
                            backgroundColor: colorArray[1],
                            borderColor: colorArray[1],
                            borderWidth: 1,
                            pointRadius: 0,
                            fill: true,
                        }
                    ]
                }}

            />     
    </div>
 );
}
export default ChartBarStudents;
