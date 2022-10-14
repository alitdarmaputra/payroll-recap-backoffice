import React  from 'react';
import { setAuthToken } from '../../Utils/utils';
import RoutesComponent from '../Routes/Routes';

function App() {
    const token = localStorage.getItem('token');
    if(token) {
        setAuthToken(token);
    }

    return (
        <div className="bg-slate-50 w-screen h-screen App">
            <RoutesComponent />
        </div>
    )
}

export default App;