import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import SurveyPage from './pages/SurveyPage'
import TodolistPage from './pages/TodoListPage'
import Navbar from './components/Navbar'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<SurveyPage />} />
                    <Route path='/todolist' element={<TodolistPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Layout() {
    return (
        <nav className='bg-slate-950'>
            <Navbar />
            <Outlet />
        </nav>
    )
}


export default Router