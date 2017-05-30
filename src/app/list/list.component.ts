import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [TacoService]
})
export class ListComponent {

	name: string;
	shell: string;
	meat: string;
	spicy: boolean;
	toppings: string;
	recipe: string;
	picture: string;

  constructor(private tacoService: TacoService) { }
  

}
