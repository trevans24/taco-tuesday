import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './nav/nav.component.css'],
  entryComponents: [NavComponent]
})
export class AppComponent {

}
