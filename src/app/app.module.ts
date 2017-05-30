import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FindComponent } from './find/find.component';
import { ListComponent } from './list/list.component';
import { RandomComponent } from './random/random.component';
// MAP
import { AgmCoreModule } from '@agm/core';
import { CreateComponent } from './create/create.component';
import { FooterComponent } from './footer/footer.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FindComponent,
    ListComponent,
    RandomComponent,
    LoginComponent,
    CreateComponent,
    FooterComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPqCXeTyW5s4MiWTf6kzwm-r58azGK18Q'
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
