import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
declare const firebase: any;

@Injectable()

export class TacoService {

	constructor(private http: Http) {}

	createAuthorizationHeaders(headers: Headers) {
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Accept', 'application/json');
		headers.append('Authorization', 'Basic');
		headers.append('Content-Type', 'application/json');
	}

	addTaco(name: string, shell: string, meat: string, toppings: string, recipe: string, picture: string) {
		console.log(name);
		// let headers = new Headers();
		// this.createAuthorizationHeaders(headers);
		return this.http.post('https://pwa-taco-tuesday.firebaseio.com/.json', JSON.stringify({
			name: name,
			shell: shell,
			meat: meat,
			toppings: toppings,
			recipe: recipe,
			picture: picture}))
			.map(response => 	response.json);
	}
	// GETTING TACOS FROM RANDOM API
	getTaco() {
		console.log('Random Taco');
		// sets up an observable to listen for changes
		return this.http.get('http://taco-randomizer.herokuapp.com/random/')
			.map((res) => res.json());
	}
	// GETTING TACOS FROM FIREBASE
	getList() {
		console.log('Listed Tacos');
		return this.http.get('https://pwa-taco-tuesday.firebaseio.com/.json')
		.map((res) => res.json());
	}


}

// ALEX API FOR FIREBASE
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXlW_OcuWYsvQLHHYhYAs6ofEGHAFNRFU",
    authDomain: "d-people-party.firebaseapp.com",
    databaseURL: "https://d-people-party.firebaseio.com",
    projectId: "d-people-party",
    storageBucket: "d-people-party.appspot.com",
    messagingSenderId: "165937787354"
  };
  // firebase.initializeApp(config);