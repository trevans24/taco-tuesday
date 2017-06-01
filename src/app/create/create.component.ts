import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [TacoService]
})
export class CreateComponent implements OnInit {

tacos = [];

constructor(private tacoService: TacoService) { }

	ngOnInit() {}

	addTaco(name: string, shell: string, meat: string, toppings: string, recipe: string, picture: string): void {
		name = name.trim();
		shell  = shell.trim();
		meat = meat.trim();
		toppings = toppings.trim();
		recipe = recipe.trim();
		picture = picture.trim();
		if (!name || !shell || !meat || !toppings || !recipe || !picture) {
			return;
		}
		this.tacoService.addTaco(name, shell, meat, toppings, recipe, picture);
	}


}
