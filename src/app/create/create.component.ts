import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service';
//declaring firebase for creation of data to db
// declare var firebase: any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [TacoService]
})
export class CreateComponent implements OnInit {

tacos = [];

constructor(private tacoService: TacoService) { }

	ngOnInit() {
		// this.tacoService.getList()
		// 	.subscribe((data) => this.tacos = data);

		// this.fbGetData();

	}

	// fbGetData() {
	// 	// Go to DB and point reference at DB to grab
	// 	// Listen to when a child is added (taco)
	// 	firebase.database().ref('/')
	// 		.on('child_added', (snapshot) => {
	// 			console.log(snapshot);
	// 		});
	// }

}
