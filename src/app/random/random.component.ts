import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service'; //service for the api fetch
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [TacoService]//inject the providers with the service
})
export class RandomComponent implements OnInit {

	// tacos = [];
	baseName;
	baseRecipe;
	condimentName;
	condimentRecipe;
	mixinName;
	mixinRecipe;
	seasoningName;
	seasoningRecipe;
	shellName;
	shellRecipe;

	constructor(private http: Http, private tacoService: TacoService) {
  }

  // THIS MAKES SURE COMPONENT IS LOADED BEFORE YOU DO ANY DATA OR FUNCTIONS
  ngOnInit() {
  	this.tacoService.getRandomTaco()
		// subscribe to get the data from the api
		.subscribe((data) => {
			console.log(data);
			// this.tacos = data.base_layer
			this.baseName = data.base_layer.name,
			this.baseRecipe = data.base_layer.recipe,
			this.condimentName = data.condiment.name,
			this.condimentRecipe = data.condiment.recipe,
			this.mixinName = data.mixin.name,
			this.mixinRecipe = data.mixin.recipe,
			this.seasoningName = data.seasoning.name,
			this.seasoningRecipe = data.seasoning.recipe,
			this.shellName = data.shell.name,
			this.shellRecipe = data.shell.recipe;
			}
		);
  }

}
