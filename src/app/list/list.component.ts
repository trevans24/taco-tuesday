import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [TacoService]
})
export class ListComponent implements OnInit {

	tacos = [];

  constructor(private tacoService: TacoService) { }
  
  ngOnInit() {
  	// GETTING TACOS FOR THE LIST
  	this.tacoService.getList()
  	.subscribe(data =>
  		// console.log(data)
  		this.tacos = data
  	);
  }

}
