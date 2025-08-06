import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_DATA } from '../redux/slices/surveyResultsSlice';

const FormComponent = ({ form, handleForm }) => {
    const [isSmoker, setIsSmoker] = useState(false);
    const [selectedCigarettes, setSelectedCigarettes] = useState([]);
    const dispatch = useDispatch();

    const handleCigaretteChange = (e) => {
        const { value, checked } = e.target;
        setSelectedCigarettes(prev => 
            checked 
                ? [...prev, value] 
                : prev.filter(brand => brand !== value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const submittedData = {
            name: formData.get('name'),
            age: formData.get('age'),
            gender: formData.get('gender'),
            smoker: formData.get('smoker'),
            cigarette: selectedCigarettes
        };

        dispatch(ADD_DATA(submittedData));
        console.log('Submitted Data:', submittedData);
        
        e.target.reset();
        setSelectedCigarettes([]);
        setIsSmoker('')
        handleForm();
    };

    return (
        <div className={`absolute inset-0 bg-slate-950/20 backdrop-blur-md flex items-center justify-center ${!form ? 'block' : 'hidden'}`}>
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-2xl shadow-black">
                <header className="mb-6">
                    <h2 className="text-2xl font-bold text-blue-600">
                        Form Survey
                    </h2>
                    <hr className="my-3 border-gray-300" />
                </header>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Input Nama */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Nama :</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Input Umur */}
                    <div className="flex flex-col">
                        <label htmlFor="age" className="text-sm font-medium text-gray-700 mb-1">Umur :</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            required
                            min="1"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Choose Gender */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                        <div className="flex space-x-4 mt-1">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    id="Laki-Laki"
                                    value="Laki-Laki"
                                    required
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="Laki-Laki" className="ml-2 text-sm text-gray-700">Laki-Laki</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    id="Perempuan"
                                    value="Perempuan"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="Perempuan" className="ml-2 text-sm text-gray-700">Perempuan</label>
                            </div>
                        </div>
                        <hr className="my-4 border-gray-300" />
                    </div>

                    {/* Choose Smoker */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Apakah Anda Perokok?</label>
                        <select
                            onChange={(e) => setIsSmoker(e.target.value === 'ya' )}
                            name="smoker"
                            id="isSmoker"
                            required
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" hidden >Pilih</option>
                            <option value="ya">Ya</option>
                            <option value="tidak">Tidak</option>
                        </select>
                    </div>

                    {/* Choose Cigarette - Conditionally shown */}
                    {isSmoker && (
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">Rokok apa yang anda gunakan?</label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {[
                                    "Kapal Sakti",
                                    "Sampoerna",
                                    "Marlboro",
                                    "Gudang Garam",
                                    "Magnum",
                                    "LA",
                                    "ESSE",
                                    "Troy"
                                ].map((brand) => (
                                    <div key={brand} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="cigarette"
                                            id={brand}
                                            value={brand}
                                            onChange={handleCigaretteChange}
                                            checked={selectedCigarettes.includes(brand)}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label htmlFor={brand} className="ml-2 text-sm text-gray-700">{brand}</label>
                                    </div>
                                ))}
                            </div>
                            <hr className="my-4 border-gray-300" />
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;