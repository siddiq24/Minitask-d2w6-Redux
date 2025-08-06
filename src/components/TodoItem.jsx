import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_TODO, TOGGLE_TODO } from '../redux/slices/TodoSlices';

function TodoItem({ todo, id }) {
    const dispatch = useDispatch();

    return (
        <div className='flex w-auto justify-between items-center'>
            <span className='text-xl mr-3'>{id + 1}.</span>
            <div className={`flex-1 flex items-center justify-between p-4 ${todo.completed?'bg-slate-500':'bg-slate-300'} rounded-lg mb-2 hover:shadow-md shadow hover:shadow-gray-500 transition-colors`}>
                <span
                    className={`flex-grow text-gray-800 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                >
                    {todo.title}
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={() => dispatch(TOGGLE_TODO(todo.id))}
                        className={`px-5 py-2 rounded-md text-sm font-medium hover:inset-shadow-xl hover:shadow-gray-500 ${todo.completed
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                            : 'bg-green-500 hover:bg-green-600 text-white '
                            } transition-colors`}
                    >
                        {todo.completed ? 'Batal' : 'Selesai'}
                    </button>
                    <button
                        onClick={() => dispatch(DELETE_TODO(todo.id))}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md transition-colors hover:shadow-xl hover:shadow-gray-500"
                    >
                        Hapus
                    </button>
                </div>
            </div >
        </div>
    );
}

export default TodoItem;