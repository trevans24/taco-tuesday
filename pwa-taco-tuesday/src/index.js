import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

(function() {
// FIREBASE DATABASE CONFIG
const config = {
  apiKey: "AIzaSyBM3O3__xXZwe4vCxtoj2DmybqbXKuChvQ",
  authDomain: "pwa-taco-tuesday.firebaseapp.com",
  databaseURL: "https://pwa-taco-tuesday.firebaseio.com",
  projectId: "pwa-taco-tuesday",
  storageBucket: "pwa-taco-tuesday.appspot.com",
  messagingSenderId: "1013636203356"
};

firebase.initializeApp(config);
const database = firebase.database();

// ELEMENTS FOR AUTH
const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const signout = document.getElementById('signout');

}());




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
