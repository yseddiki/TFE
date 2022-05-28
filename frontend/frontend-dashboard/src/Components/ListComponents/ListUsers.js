import { useEffect, useState } from "react";
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
        id: 'year',
        name: 'Year',
        options: [
            { value: 'BAC3' },
            { value: 'BAC2' },
            { value: 'BAC1' },
        ],
    }
]

const ListUsers = ({usersList,idEvaluation}) => {
    const navigate = useNavigate();
    const [UsersList, setUsersList] = useState([]);
    const [UsersFilterList, setUsersFilterList] = useState([]);
    const [activeFilter, setFilter] = useState([])
    const handleChange = ((e) => {
        let isChecked = e.target.checked;
        if (isChecked === true) {
            activeFilter.push(e.target.defaultValue)

        } else {
            activeFilter.splice(activeFilter.indexOf(e.target.defaultValue), 1)
        }
        console.log(UsersFilterList)
        updateArray()
    });
    const updateArray = () => {
        setUsersFilterList(UsersList.filter(data => activeFilter.includes(data.module.toUpperCase())))
        if (activeFilter.length === 0) {
            setUsersFilterList(UsersList)
        }
    };
    useEffect(() => {
        setUsersList(usersList)
        setUsersFilterList(usersList)
    }, [usersList])

    return (
       
            <div >
                <Grid
                    data={UsersFilterList}
                    columns={[
                        'idUser',
                        'year',
                        'date',
                        'typeVideo',
                        {
                            name: 'Details',
                            formatter: (cell, row) => {
                                return _(
                                    <ButtonLink navigate={navigate} id={idEvaluation } idUser={row.cells[0].data} />
                                );
                            }
                        }
                    ]}

                    search={true}
                    pagination={{
                        limit: 5,
                        enabled: true
                    }}
                />
            </div>
    );

};
export default ListUsers