import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, NavBar, SubTitle, Title, Card } from '../Basics'
import { ListUsers } from '../ListComponents';
import EvaluationData from '../../Data/ArrayEvaluation.json';
import Users from '../../Data/ArrayUtilisateurs.json'
import { ChartEvaluation } from '../ChartComponents';
const EvaluationDetails = ({ id }) => {
    const params = useParams()
    const [usersList, setUsersList] = useState([]);
    const [Evaluation, setEvaluation] = useState({});
    const [dataArray, setDataArray] = useState([]);
    const [basicDataArray, setBasicDataArray] = useState([]);
    useEffect(() => {
        setUsersList(Users)
        setEvaluation(EvaluationData.find(evaluation => evaluation.idEvaluation === params.id))
        setDataArray(Users.map((element, index) => element.data))
        setBasicDataArray(Users.map((element, index) => element.basicData))
        
    }, [EvaluationData])
   
   
    return (
        <div>
            <Header />
            <NavBar name={`Evaluation : ${Evaluation.idEvaluation}`} />
            <Title>
                <Card item={Evaluation} />
            </Title>
            <Title title="Analyse d'evaluation">
                <SubTitle title="Avant le traitement">
                    <ChartEvaluation data={basicDataArray} />
                </SubTitle>
                <SubTitle title="Aprés le traitement">
                    <ChartEvaluation data={dataArray} />
                </SubTitle>

            </Title>
            <Title title="Users from this evaluation">
                <ListUsers usersList={usersList} idEvaluation={Evaluation.idEvaluation}/>
            </Title>
        </div>
    )
}
export default EvaluationDetails
