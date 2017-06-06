import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TacoService {

	constructor(private http: Http) {}

	createAuthorizationHeaders(headers: Headers) {
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('cache-control', 'no-cache');
		headers.append('Accept', 'application/json');
		headers.append('Authorization', 'Basic');
		headers.append('Content-Type', 'application/json');
	}

	addTaco(name: string, shell: string, meat: string, toppings: string, recipe: string, picture: string) {
		console.log(name);
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
		let headers = new Headers();
		console.log(headers);
		this.createAuthorizationHeaders(headers);
		return this.http.get('http://taco-tuesday-db.herokuapp.com/api/tacos', { headers: headers })
		.map((res) => res.json());
	}


}