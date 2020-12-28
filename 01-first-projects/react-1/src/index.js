import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hello', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11},
];

let dialogs = [
    {id: 1, name: 'Ilya'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sirgay'},
    {id: 4, name: 'Pasha'},
    {id: 5, name: 'Gleb'},
    {id: 6, name: 'Danya'}
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hey'},
    {id: 3, message: 'Bro'},
    {id: 4, message: 'Bro'},
    {id: 5, message: 'Bro'},
    {id: 6, message: 'Bro'}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
