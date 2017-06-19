import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()

export class TacoService {

	// SET URL STRING
	url: string = 'http://taco-tuesday-db.herokuapp.com/api/tacos';

	// SET HTTP REQ to PRIVATE
	constructor(private http: Http) {}
	// Setting Auth Headers for Requests
	createAuthorizationHeaders(headers: Headers) {
		// Set headers for content to accept JSON data
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
		return this.http.post(this.url, taco, { headers: headers })
		.map(res => res.json());
	}
	// GETTING TACOS FROM RANDOM API
	getRandomTaco() {
		// sets up an observable to listen for changes
		return this.http.get('http://taco-randomizer.herokuapp.com/random/')
			.map((res) => res.json());
	}
	// GETTING LIST OF TACOS FROM DB on HEROKU
	getList() {
		let headers = new Headers();
		this.createAuthorizationHeaders(headers);
		return this.http.get(this.url, { headers: headers })
		.map((res) => res.json());
	}
	// GETTING EACH TACO FROM LIST
	// Get ID of String and use observable for data of RES
	getTaco(tacoId: string): Observable<Taco[]> {
		// Set Headers for Req
		let headers = new Headers();
		this.createAuthorizationHeaders(headers);
		return this.http.get(this.url + tacoId, { headers: headers })
		.map((res) => res.json());
	}


}