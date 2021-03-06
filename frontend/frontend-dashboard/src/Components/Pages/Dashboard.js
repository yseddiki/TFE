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
    newArray.forEach((element, index) => {
        if(element > 150)
        {
            newArray[index] = 150;
        }
        if (element < 45)
        {
            newArray[index] = 45;
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
                    <p>Actuellement notre monde est fort attach?? ?? Internet Of Things, Les gens ont besoin de tout savoir par rapport ?? leurs maisons, leurs voitures et surtout leurs sant??s. Aujourd???hui de nombreuses possibilit??s sont offertes pour connaitre sont ??tat physique et mental. Les profiles des ??tres vivants sont calcul??s gr??ce ?? des formulaires et des outils technologiques tels que des montres connect??s ou pleins d???autres. Ces m??thodes permettent d???avoir un statut d???une personne pour d?????ventuelles traitements et acqu??rir des donn??es neurologiques ou physiques. Cette ??tude ?? pour but de d??montrer les diff??rents m??thodes collectes sur l???anxi??t?? d?????valuer quelle m??thode peut ??tre repr??sentative sur une personne par rapport un t??che physique.</p>
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