import React from 'react'
import { Header, NavBar, Title } from '../Basics'
import { ChartBar, ChartBarBrutes } from '../ChartComponents'

import { ListEvaluations } from '../ListComponents'


const Analyse = () => {
    return (
        <div>
            <Header />
            <NavBar name="Analyse" />
            <Title title="Analyse sur les données lissées" >
                <ChartBar />
            </Title>
            <Title title="Analyse sur les données brutes" >
                <ChartBarBrutes />
            </Title>
        </div>

    )
}
export default Analyse;
