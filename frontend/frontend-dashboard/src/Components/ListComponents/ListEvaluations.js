import { useEffect, useState } from "react";
import EvaluationArray from "../../Data/ArrayEvaluation.json"
import "gridjs/dist/theme/mermaid.css";
import React from 'react';
import { Grid, _ } from 'gridjs-react';
import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import { ButtonLink } from "../Basics";
import { useNavigate } from "react-router-dom";
// Can be dynamique 
const filters = [
    {
        id: 'evaluation',
        name: 'Evaluations',
        options: [
            { value: 'IDE' },
            { value: 'English Test' },
            { value: 'IQ Test' },
        ],
    }
]

const ListEvaluation = () => {
    const navigate = useNavigate();
    const [EvaluationList, setEvaluationList] = useState([]);
    const [EvaluationFilterList, setEvaluationFilterList] = useState([]);
    const [activeFilter, setFilter] = useState([])
    const handleChange = ((e) => {
        let isChecked = e.target.checked;
        if (isChecked === true) {
            activeFilter.push(e.target.defaultValue)

        } else {
            activeFilter.splice(activeFilter.indexOf(e.target.defaultValue), 1)
        }
        console.log(EvaluationFilterList)
        updateArray()
    });
    const updateArray = () => {
        setEvaluationFilterList(EvaluationList.filter(data => activeFilter.includes(data.module.toUpperCase())))
        if (activeFilter.length === 0) {
            setEvaluationFilterList(EvaluationList)
        }
    };
    useEffect(() => {
        setEvaluationList(EvaluationArray)
        setEvaluationFilterList(EvaluationArray)
    }, [])

    return (
      
            <div>
                <Grid
                    data={EvaluationFilterList}
                    columns={[
                        'idEvaluation',
                        'name',
                        'Date',
                        {
                            name: 'Details',
                            formatter: (cell, row) => {
                                return _(
                                    <ButtonLink navigate={navigate} id={row.cells[0].data} />
                                );
                            }
                        }
                    ]}

                    search={true}
                    pagination={{
                        limit: 10,
                        enabled: true
                    }}
                />
            </div>
    );

};
export default ListEvaluation