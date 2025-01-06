// filepath: /c:/Users/user/OneDrive/Documents/logfleet app/login.js
javascript
import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('YOUR_API_URL/auth/login', { email, password });
            // Save token or update context state here or redirect to dashboard
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="login-container">
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
    );
}
export default Login;
