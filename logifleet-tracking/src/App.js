import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

function App() {
    const [token, setToken] = useState(null);

    return (
        <div className="App">
            {token ? <Dashboard token={token} /> : <Login onLogin={setToken} />}
        </div>
    );
}

export default App;