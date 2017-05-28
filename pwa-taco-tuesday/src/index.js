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

// LOGIN EVENT
login.addEventListener('click', e => {

	// GET EMAIL AND PASSWORD
	const email = email.value;
	const password = password.value;
	const auth = firebase.auth();

	// SIGN IN
	const promise = auth.signInWithEmailAndPassword(email, password);
	promise.catch(err => console.log(err.message));
});

}());




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
