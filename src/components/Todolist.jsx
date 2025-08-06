import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
    const todos = useSelector(state => state.todos.todos);

    return (
        <div className="space-y-2 bg-white rounded-2xl p-8">
            {todos.length === 0 ? (
                <div className="text-center py-4 text-gray-500">
                    Tidak ada todo. Tambahkan yang baru!
                </div>
            ) : (
                todos.map((todo, i) => (
                    <TodoItem key={todo.id} todo={todo} id={i} />
                ))
            )}
        </div>
    );
}

export default TodoList;