import './App.css';
import React from "react";
import Technologies from './Technologies.js'
import Header from './Header.js'
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
            <Footer />
        </div>
    );
}

export default App;