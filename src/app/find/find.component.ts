import { Component, OnInit, OpaqueToken } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})

export class FindComponent implements OnInit{
	
	lat: number = 39.758200;
	lng: number = -105.007153;
	zoom: number = 15;

	markers = [
	{
		lat: 39.753192,
		lng: -104.999199,
		label: 'Machete'
	},
	{
		lat: 39.751029,
		lng: -104.999817,
		label: "Illegal Pete's"
	}, 
	{
		lat: 39.750065,
		lng: -104.999300,
		label: 'Rio Grande'
	},
	{
		lat: 39.750065,
		lng: -104.999553,
		label: 'Tamayo'
	},
	{
		lat: 39.759078,
		lng: -105.010713,
		label: 'Lola'
	}
	];

	constructor() {}

	ngOnInit() {}
}

export const LAZY_MAPS_API_CONFIG = new OpaqueToken('angular2-google-maps LAZY_MAPS_API_CONFIG');
