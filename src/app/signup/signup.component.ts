import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
	// Current state and catching errors
	state: string = '';
	error: any;

//setting angular fire and router 
  constructor(public af: AngularFire, private router: Router) {
  	// CHECK IF LOGGED IN AND IF SO SEND TO MEMBERS
  	this.af.auth.subscribe(auth => {
  		if(auth) {
  			this.router.navigateByUrl('./members');
  		}
  	});
  }
// CREATE A NEW USER IF THEY DONT WANT TO SIGN IN WITH GOOGLE
  onSubmit(formData) {
  	if(formData.valid) {
  		console.log(formData.value);
  		this.af.auth.createUser({
  			email: formData.value.email,
  			password: formData.value.password
  		})
  		// If Successful then send to members page
  		.then((success) => {
  			console.log('Success');
  			this.router.navigate(['/members']);
  		})
  		// If error catch it and send to console
  		.catch((err) => {
  			console.log('Sign Up Error: ', err);
  			this.error = err;
  		});
  	}
  }

  ngOnInit() {
  }
  
}
