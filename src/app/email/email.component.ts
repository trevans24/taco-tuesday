import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

// Set State and errors if any
	state: string = '';
	error: any;

  constructor(public af: AngularFire, private router: Router) {
  	// CHECK IF LOGGED IN AND IF SO SEND TO MEMBERS
  	this.af.auth.subscribe(auth => {
  		if(auth) {
  			this.router.navigateByUrl('./members');
  		}
  	});
  }
// SUBMIT FOR LOGIN WITH EMAIL
  onSubmit(formData) {
  	if(formData.valid) {
  		console.log(formData.value);
  		this.af.auth.login({
  			email: formData.value.email,
  			password: formData.value.password
  		},
  		{
  			provider: AuthProviders.Password,
  			method: AuthMethods.Password
  		})
  		.then((success) => {
  			console.log('Login success', success);
  			this.router.navigate(['/members']);
  		})
  		.catch((err) => {
  			console.log("Login Error: ", err);
  			this.error = err;
  		});
  	}
  }

  ngOnInit() {
  }
  
}
