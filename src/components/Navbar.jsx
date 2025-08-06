import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="mb-6 py-8 border border-b-gray-300 px-[10%] sticky top-0 left-0 right-0 bg-slate-950 flex justify-around ">
            <Link to={'/'} className="text-xl font-semibold text-blue-600 hover:text-blue-800 hover:underline">
                Smoker Survey
            </Link>
            <Link to={'/todolist'} className="text-xl font-semibold text-blue-600 hover:text-blue-800 hover:underline">
                Todolist
            </Link>
        </header>
    )
}

export default Navbar