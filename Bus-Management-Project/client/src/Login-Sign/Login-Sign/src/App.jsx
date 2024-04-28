import React from 'react';
import Login from './Login';
import Signup from './signUp';

function App() {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <Login />
            <Signup /> {/* Render the Signup component here */}
        </div>
    );
}

export default App;