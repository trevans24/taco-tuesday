import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [TacoService]
})
export class CreateComponent implements OnInit {

	public data;

constructor(private tacoService: TacoService) { }
	
	ngOnInit() {}

	addTaco(name: string, shell: string, meat: string, toppings: string, recipe: string, picture: string) {
		name = name;
		shell = shell;
		meat = meat;
		toppings = toppings;
		recipe = recipe;
		picture = picture;
		console.log('Hello');
		if (!name || !shell || !meat || !toppings || !recipe || !picture) {
			return;
		}
		this.tacoService.addTaco(name, shell, meat, toppings, recipe, picture)
			.subscribe(data => this.data = JSON.stringify(data),
				error => console.error(error),
				() => console.log('Posted Taco'));
	}


}
