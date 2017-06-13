import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './nav/nav.component.css', './button/button.component.css'],
  entryComponents: [NavComponent, ButtonComponent],
  animations: []
})
export class AppComponent {

}
