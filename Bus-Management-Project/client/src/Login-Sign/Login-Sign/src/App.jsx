import React from 'react';
import Login from './Login';
import Signup from './signUp';

function App() {
    return (
        <div>
            <Login />
            <Signup /> {/* Render the Signup component here */}
        </div>
    );
}

export default App;