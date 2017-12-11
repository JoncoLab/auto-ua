import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDmPuwFUuBSMqFF4vv9MvtbW9sR-w8KNzI",
    authDomain: "auto-ua.firebaseapp.com",
    databaseURL: "https://auto-ua.firebaseio.com",
    projectId: "auto-ua",
    storageBucket: "auto-ua.appspot.com",
    messagingSenderId: "142729633437"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
