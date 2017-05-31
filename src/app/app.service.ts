import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TacoService {

	constructor(private http: Http) {}

	createAuthorizationHeaders(headers: Headers) {
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Accept', 'application/json');
		headers.append('Authorization', 'Basic');
		headers.append('Content-Type', 'application/json');
	}

	addTaco(taco) {
		console.log(taco);
		let headers = new Headers();
		this.createAuthorizationHeaders(headers);
		return this.http.post('/api/list', JSON.stringify(taco), { headers: headers })
			.map(response => response.json);
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