import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, NavBar, SubTitle, Title, Card } from '../Basics'
import { ListUsers } from '../ListComponents';
import userArray from '../../Data/ArrayUtilisateurs'
import { ChartEvaluation, ChartUser } from '../ChartComponents';

const UserDetails = () => {
    const params = useParams()
    const [user, setUser] = useState([]);
    const [Evaluation, setEvaluation] = useState({});

    useEffect(() => {
        setUser(userArray.find(user => user.idUser == params.idUser))
        console.log(userArray)
    }, [userArray])
    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div>
            <Header />
            <NavBar name={`Evalutation : ${params.id}`} />
            <Title>
                <Card item={user} />
            </Title>
            <Title title={`Analyse : ${params.idUser}`}>
                <SubTitle title={`Avant le traitement`}>
                    <ChartUser data={user.basicData} />
                </SubTitle>
                <SubTitle title={`Aprés le traitement`}>
                    <ChartUser data={user.data} />
                </SubTitle>
            </Title>
            
        </div>
    )
}
export default UserDetails