import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TacoService {

	constructor(private http: Http) {}

	createAuthorizationHeaders(headers: Headers) {
		headers.append('Content-Type', 'application/json');
	}

	addTaco(name: string, shell: string, meat: string, toppings: string, recipe: string, picture: string) {
		console.log(name);
		let headers = new Headers();
		this.createAuthorizationHeaders(headers);
		let taco = JSON.stringify({
			name: name,
			shell: shell,
			meat: meat,
			toppings: toppings,
			recipe: recipe,
			picture: picture
		});
		console.log(taco);
		return this.http.post('http://taco-tuesday-db.herokuapp.com/api/tacos', taco, { headers: headers })
		.map(res => res.json());
	}
	// GETTING TACOS FROM RANDOM API
	getTaco() {
		// sets up an observable to listen for changes
		return this.http.get('http://taco-randomizer.herokuapp.com/random/')
			.map((res) => res.json());
	}
	// GETTING TACOS FROM FIREBASE
	getList() {
		let headers = new Headers();
		this.createAuthorizationHeaders(headers);
		return this.http.get('http://taco-tuesday-db.herokuapp.com/api/tacos', { headers: headers })
		.map((res) => res.json());
	}


}