import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Taco } from './taco';

@Injectable()

export class TacoService {

	// SET URL STRING
	url: string = 'http://taco-tuesday-db.herokuapp.com/api/tacos';
	randomUrl: string = 'http://taco-randomizer.herokuapp.com/random/';

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
		return this.http.get(this.randomUrl)
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
		// set params for ID
		let tacoParams = new URLSearchParams();
		tacoParams.append('id', tacoId);
		// set options of params and headers
		let options = new RequestOptions({ headers: headers, params: tacoParams });
		return this.http.get(this.url, options)
		.map((res) => res.json());
	}


}