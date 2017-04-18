import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let emailsList = [
    {
        id: 0,
        email: 'guo@tuxera.com',
        username: 'guo',
    },
    {
        id: 1,
        email: 'peng@tuxera.com',
        username: 'peng',
    }
];

ReactDOM.render(
    <App emailsList={emailsList}/>,
    document.getElementById('root')
);
