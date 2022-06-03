import React from 'react'
import { Header, NavBar, Title } from '../Basics'
import { ChartBar, ChartBarBrutes, ChartBarStudents } from '../ChartComponents'

import { ListEvaluations } from '../ListComponents'


const Analyse = () => {
    return (
        <div>
            <Header />
            <NavBar name="Analyse" />
            <Title title="Comparaison des deux moyennes par rapport aux types d'évaluations" >
                <ChartBar />
            </Title>
            <Title title="Analyse des deux moyennes sur la vidéo émotionnelle par utilisateur" >
               <ChartBarStudents type="Emotionnelle"/>
            </Title>
            <Title title="Analyse des deux moyennes sur la vidéo humour par utilisateur" >
               <ChartBarStudents type="Humour"/>
            </Title>
            <Title title="Analyse des deux moyennes sur la vidéo creepy par utilisateur" >
               <ChartBarStudents type="Creepy"/>
            </Title>
        </div>

    )
}
export default Analyse;
