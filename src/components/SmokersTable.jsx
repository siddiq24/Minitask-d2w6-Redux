import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeData } from '../redux/slices/surveyResultsSlice';

const SmokersTable = ({ handleForm }) => {
    const smokersData = useSelector((state) => state.surveyResults);
    const dispatch = useDispatch();

    if (!Array.isArray(smokersData)) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center text-gray-500">No data available</div>
                <button
                    onClick={handleForm}
                    className='bg-blue-500 w-full my-4 py-2 text-lg text-white rounded-xl font-bold'
                >
                    ADD DATA
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="overflow-x-auto bg-white rounded-lg shadow max-w-[90%] ">
                <table className="min-w-full divide-y divide-gray-200">
                    <caption className="px-6 py-3 bg-gray-50 text-left text-lg font-medium text-gray-900 uppercase tracking-wider">
                        <h2 className="text-xl font-bold">Data Smokers Indonesia</h2>
                    </caption>
                    <thead className="bg-gray-50">
                        <tr>
                            {['No.', 'NAMA', 'UMUR', 'GENDER', 'IS SMOKERS', 'FAV CIGARETTES', 'ACTION'].map((h) => (
                                <th
                                    key={h}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {smokersData.map((smoker, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{i + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {smoker.name || '-'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {smoker.age || '-'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {smoker.gender || '-'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                        ${smoker.smoker === 'ya' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                    >
                                        {smoker.smoker || 'No'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 wrap-break-word">
                                    {smoker.cigarette?.join(', ') || '-'}
                                </td>
                                <td className="py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button
                                        onClick={() => dispatch(removeData(i))}
                                        className='bg-red-600 w-[80%] rounded-xl text-white py-1 mx-auto hover:bg-red-700 transition'
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button
                onClick={handleForm}
                className='bg-blue-500 w-full max-w-[90%]  my-4 py-2 text-lg text-white rounded-xl font-bold hover:bg-blue-600 transition'
            >
                ADD DATA
            </button>
        </div>
    );
};

export default SmokersTable;