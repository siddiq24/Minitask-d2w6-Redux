import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/Todolist';

function TodolistPage() {
    return (
        <div className="min-h-screen py-8 px-[20%]">
            <div className="w-full mx-auto rounded-xl shadow-md overflow-hidden p-6">
                <h1 className="text-5xl font-bold text-center text-gray-100 mb-8">Todo List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    );
}

export default TodolistPage;