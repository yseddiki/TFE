import { useEffect, useState } from "react";
import EvaluationArray from "../../MockData/ListEvaluations.json"
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
        <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center border-4 rounded-lg border-gray-500/25">
                {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="px-4 py-6 border-t border-gray-200">
                        {({ open }) => (
                            <>
                                <h3 className="flow-root -mx-2 -my-3">
                                    <Disclosure.Button className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                                        <span className="font-medium text-gray-900">{section.name}</span>
                                        <span className="flex items-center ml-6">
                                            {open ? (
                                                <MinusSmIcon className="w-5 h-5" aria-hidden="true" />
                                            ) : (
                                                <PlusSmIcon className="w-5 h-5" aria-hidden="true" />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                    <div className="space-y-6">
                                        {section.options.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center">
                                                <input
                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                    name={`${section.id}[]`}
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    onChange={e => handleChange(e)}
                                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                />
                                                <label
                                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                    defaultValue={option.value}
                                                    onChange={e => handleChange(e)}
                                                    className="flex-1 min-w-0 ml-3 text-gray-500"
                                                >
                                                    {option.value}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
            <div className="col-span-2">
                <Grid
                    data={EvaluationFilterList}
                    columns={[
                        'idEvaluation',
                        'name',
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
        </div>
    );

};
export default ListEvaluation