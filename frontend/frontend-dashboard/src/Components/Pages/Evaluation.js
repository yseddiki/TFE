import React from 'react'
import { Header, NavBar, Title } from '../Basics'
import { ListEvaluations } from '../ListComponents'


const Evaluation = () => {
    return (
        <div>
            <Header />
            <NavBar name="Evaluations" />
            <Title title="Liste des √©valuations" >
                <ListEvaluations />
            </Title>
        </div>

    )
}
export default Evaluation
