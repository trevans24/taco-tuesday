import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
// import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './nav/nav.component.css', './footer/footer.component.css'],
  entryComponents: [NavComponent, FooterComponent],
  animations: []
})
export class AppComponent {

}
