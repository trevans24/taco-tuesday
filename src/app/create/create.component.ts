import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [TacoService]
})
export class CreateComponent {
	name: string;
	shell: string;
	meat: string;
	spicy: boolean;
	toppings: string;
	recipe: string;
	picture: string;

	constructor(private tacoService: TacoService) {
		// tacoService.getTacos()
		// .subscribe(res => {
		// 	this.tacos = res;
		// })
	}

	addTaco() {
		let taco = {
			name: this.name,
			shell: this.shell,
			meat: this.meat,
			spicy: this.spicy,
			toppings: this.toppings,
			recipe: this.recipe,
			picture: this.picture
		}
		this.tacoService.addTaco(taco)
		.subscribe(data => {
			console.log('Success ', data);
		});
	}

}
