import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, NavBar, SubTitle, Title, Card } from '../Basics'
import { ListUsers } from '../ListComponents';
import EvaluationData from '../../MockData/Evaluation.json';
import User from '../../MockData/User.json'
import { ChartEvaluation } from '../ChartComponents';

const UserDetails = () => {
    const params = useParams()
    const [user, setUser] = useState([]);
    const [Evaluation, setEvaluation] = useState({});
    useEffect(() => {
        setUser(User)
        setEvaluation(EvaluationData)
    }, [])

    return (
        <div>
            <Header />
            <NavBar name={`Evalutation : ${params.id}`} />
            <Title>
                <Card item={user} />
            </Title>
            <Title title={`Analyse : ${params.idUser}`}>
                <ChartEvaluation/>
            </Title>
            
        </div>
    )
}
export default UserDetails