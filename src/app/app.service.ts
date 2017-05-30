import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TacoService {

	constructor(private http: Http) {}

	createAuthorizationHeaders(headers: Headers) {
		headers.append('Access-Control-Allow-Origin','*');
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

	getTaco(url) {
		console.log('Random Taco');
		let headers = new Headers();
		this.createAuthorizationHeaders(headers);
		return this.http.get('http://taco-randomizer.herokuapp.com/random/', { headers: headers })
			.map(response => response.json);
	}

}