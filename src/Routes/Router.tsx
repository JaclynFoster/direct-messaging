import React from 'react'
import {
Link,
Route,
RouterProvider,
Routes,
createBrowserRouter
} from 'react-router-dom'
import Calendar from './Calendar'
import Conversations from './Conversations'
import Dashboard from './Dashboard'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Users from './Users'

const Router = () => {
return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/users" element={<Users />} />
    <Route path="/conversations" element={<Conversations />} />
    <Route path="/calendar" element={<Calendar />} />
    </Routes>
)
}

export default Router

