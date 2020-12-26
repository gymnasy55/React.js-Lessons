import './App.css';
import React from "react";

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News Feed</a>
            <a href="#">Contacts</a>
        </div>
    )
}

export default App;