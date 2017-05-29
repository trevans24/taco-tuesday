import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})

export class FindComponent implements OnInit{
	lat: number = 39.758200;
	lng: number = -105.007153;
	zoom: number = 15;

	constructor() {}

	ngOnInit() {}
}
