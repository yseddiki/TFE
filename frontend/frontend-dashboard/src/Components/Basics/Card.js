import { PaperClipIcon } from '@heroicons/react/solid'
import axios from 'axios'

const Card = ({ item }) => {
    return (

        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{item.sessionId}</h3>
                <p className="max-w-2xl mt-1 text-sm text-gray-500">{item.module}</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    {
                        Object.keys(item).filter(i => i !== "average" ).map((element, idx) => {
                            console.log(element);
                            if (idx % 2 === 0) {
                                return (
                                    <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">{element}</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item[element]}</dd>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">{element}</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item[element]}</dd>
                                    </div>
                                )
                            }
                        })}
                </dl>
            </div>
        </div>
    )
}
export default Card