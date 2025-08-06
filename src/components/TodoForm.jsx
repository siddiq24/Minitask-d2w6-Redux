import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../redux/slices/TodoSlices';

function TodoForm() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(ADD_TODO(input));
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Tambahkan todo baru..."
                    className="flex-grow px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Tambah
                </button>
            </div>
        </form>
    );
}

export default TodoForm;