import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

error: any;
constructor(public af: AngularFire, private router: Router) {
// CHECK IF CURRENTLY LOGGED IN IF SO SEND TO HOME
	this.af.auth.subscribe(auth => {
			if(auth) {
				this.router.navigateByUrl('/members');
			}
		});
	}
// LOGIN ON GOOGLE BUTTON
	loginGoogle() {
		this.af.auth.login({
			provider: AuthProviders.Google,
			// POPUP for Authentication Window
			method: AuthMethods.Popup,
		})
		.then((success) => {
			// IF SUCCESS NAVIGATE TO MEMBERS
			this.router.navigate(['/members']);
		})
		.catch((err) => {
			// IF ERROR THEN CATCH ERROR
			this.error = err;
		})
	}

  ngOnInit() {
  }

}
