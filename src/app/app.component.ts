import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './header/header.component.css'],
  entryComponents: [HeaderComponent]
})
export class AppComponent {

}
