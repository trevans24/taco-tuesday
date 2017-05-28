import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBM3O3__xXZwe4vCxtoj2DmybqbXKuChvQ",
  authDomain: "pwa-taco-tuesday.firebaseapp.com",
  databaseURL: "https://pwa-taco-tuesday.firebaseio.com",
  projectId: "pwa-taco-tuesday",
  storageBucket: "pwa-taco-tuesday.appspot.com",
  messagingSenderId: "1013636203356"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
