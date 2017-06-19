import { Component, OnInit } from '@angular/core';
import { TacoService } from '../app.service';
import { Http, URLSearchParams } from '@angular/http';

import { Taco } from '../taco';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [TacoService]
})
export class ShowComponent implements OnInit {

  constructor(private http: Http, private tacoService: TacoService) { }

  ngOnInit() {
  	this.tacoService.getTaco(tacoId)
  	.subscribe((data) => {
  		console.log(data);
  	});
  }

}
