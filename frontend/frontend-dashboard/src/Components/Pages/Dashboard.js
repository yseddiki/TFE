import React from 'react'
import { Content, Header, NavBar, Title } from '../Basics'


const Dashboard = () => {
    return (

        <div>
            <Header />
            <NavBar name="Dashboard" />
            <Title title="TFE">
                <Content>
                    <p>Actuellement notre monde est fort attaché à Internet Of Things, Les gens ont besoin de tout savoir par rapport à leurs maisons, leurs voitures et surtout leurs santés. Aujourd’hui de nombreuses possibilités sont offertes pour connaitre sont état physique et mental. Les profiles des êtres vivants sont calculés grâce à des formulaires et des outils technologiques tels que des montres connectés ou pleins d’autres. Ces méthodes permettent d’avoir un statut d’une personne pour d’éventuelles traitements et acquérir des données neurologiques ou physiques. Cette étude à pour but de démontrer les différents méthodes collectes sur l’anxiété d’évaluer quelle méthode peut être représentative sur une personne par rapport un tâche physique.</p>
                </Content>
            </Title>
        </div>

    )
}
export default Dashboard