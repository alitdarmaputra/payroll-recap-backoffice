import React  from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import { Routes , Route } from 'react-router-dom';
import Login from '../Login/Login';

function App() {
    return (
        <div className="bg-slate-50 w-screen h-screen App">
            <Login />
        </div>
    )
}

export default App;