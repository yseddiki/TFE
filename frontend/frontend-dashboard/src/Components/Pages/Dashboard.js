import React, { useState } from 'react'
import { Content, Header, NavBar, Title } from '../Basics'

const Dashboard = () => {
const [textArray, setTextArray] = useState([])
const [array, setArray] = useState([]);
const [arrayFinal, setArrayFinal] = useState([]);
function splitText(text) {
    const array = text.split(', ');
    setArray(array);
}
function filterArray(array) {
    //This function removes 20% of the beginning array and 20 % of the end of the array
    console.log("basic array", array);
    const arrayLength = array.length;
    const Percent = Math.round(arrayLength / 5);
    const newArray = array.slice(Percent, arrayLength - Percent);
    console.log("Array after filter",newArray);
    lisserDataArray(newArray);
}
function lisserDataArray(array) {
    /// this function apply moving average and convert to int on each of data in array and return a new array
    
    const newArray = array.map((element, index) => {
        if (index === 0 || index === array.length - 1) {
            return parseInt(element);
        }
        else {
            return Math.round((parseInt(array[index - 1])+parseInt(element)+ parseInt(array[index + 1])) / 3);
        }
    })
    setArrayFinal(newArray);
    console.log("after moving average", newArray);

}
function displayData(arrayFinal) {
    //this function display the date in text format
    let text = "[";
    const newArray = arrayFinal.map((element, index) => {
        if(index === arrayFinal.length - 1) {
            return text += `${element}]`;
        }
        else {
        text += element + ",";
        }
    })
    return text;
}
const submitForm = (event) => {
        event.preventDefault();
        splitText(textArray);
        filterArray(array);
    }
    return (

        <div>
            <Header />
            <NavBar name="Dashboard" />
            <Title title="TFE">
                <Content>
                    <p>Actuellement notre monde est fort attaché à Internet Of Things, Les gens ont besoin de tout savoir par rapport à leurs maisons, leurs voitures et surtout leurs santés. Aujourd’hui de nombreuses possibilités sont offertes pour connaitre sont état physique et mental. Les profiles des êtres vivants sont calculés grâce à des formulaires et des outils technologiques tels que des montres connectés ou pleins d’autres. Ces méthodes permettent d’avoir un statut d’une personne pour d’éventuelles traitements et acquérir des données neurologiques ou physiques. Cette étude à pour but de démontrer les différents méthodes collectes sur l’anxiété d’évaluer quelle méthode peut être représentative sur une personne par rapport un tâche physique.</p>
                </Content>
            </Title>
            <Title title="Avoir une array lissible">
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input id="array" type="text" onChange ={(event)=> setTextArray(event.target.value)}>
                </input>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submitForm}>
                    Submit
                </button>
            </form>
            <p>{displayData(arrayFinal)}</p>
            </Title>
        </div>

    )
}
export default Dashboard