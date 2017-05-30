import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [TacoService]
})
export class RandomComponent implements OnInit {

	constructor(private tacoService: TacoService) {}

  ngOnInit() {
  }

  getTaco(taco) {
  	this.tacoService.getTaco(taco)
  	.subscribe(data => {
  		console.log(taco);
  	});
  }

}
