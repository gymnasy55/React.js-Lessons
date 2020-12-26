import './App.css';
import React from "react";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV.png" alt=""/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <main className="main">
                <div>
                    <img src="https://s3.tproger.ru/uploads/2018/04/logos.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                        <div>
                            post 3
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                footer
            </footer>
        </div>
    );
}

export default App;