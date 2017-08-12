import { Component, OnInit } from '@angular/core';
import { SwapiApiService } from '../shared/api.swapi.service';
import Ship from '../models/ship';

@Component({
	selector: 'my-ships-list',
	templateUrl: './ships.component.html',
	styleUrls: ['./ships.component.scss'],
	providers: [SwapiApiService]
})

export default class ShipsComponent implements OnInit {
	ships: Ship[];
	constructor(private swapi: SwapiApiService) {}
	ngOnInit() {
		console.log('ships page');
		this.getShips();
	}

	getShips(): void {
		this.swapi.getShips().then(ships => {
			this.ships = ships;
			console.log(ships);
		});
	}
}
