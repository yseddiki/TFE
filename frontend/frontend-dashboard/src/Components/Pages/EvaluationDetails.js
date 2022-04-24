import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, NavBar, SubTitle, Title, Card } from '../Basics'
import { ListUsers } from '../ListComponents';
import EvaluationData from '../../MockData/Evaluation.json';
import Users from '../../MockData/ListUsers.json'
import { ChartEvaluation } from '../ChartComponents';
const EvaluationDetails = ({ id }) => {
    const params = useParams()
    const [usersList, setUsersList] = useState([]);
    const [indexesList, setIndexesList] = useState([]);
    const [Evaluation, setEvaluation] = useState({});
    useEffect(() => {
        setUsersList(Users)
        setEvaluation(EvaluationData)
    }, [])

    return (
        <div>
            <Header />
            <NavBar name={`Evaluation : ${Evaluation.idEvaluation}`} />
            <Title>
                <Card item={Evaluation} />
            </Title>
            <Title title="Analyse  Evaluation">
                <ChartEvaluation/>
            </Title>
            <Title title="Users from this evaluation">
                <ListUsers usersList={usersList} idEvaluation={Evaluation.idEvaluation}/>
            </Title>
        </div>
    )
}
export default EvaluationDetails
