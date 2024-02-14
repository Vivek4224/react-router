import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router1() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter >
        </>
    )
}
