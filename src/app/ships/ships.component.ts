import { Component, OnInit, HostListener } from '@angular/core';
import { SwapiApiService } from '../shared/api.swapi.service';
import Ship from '../models/ship';
import { StorageService } from '../shared/storage.service';
@Component({
	selector: 'my-ships-list',
	templateUrl: './ships.component.html',
	styleUrls: ['./ships.component.scss'],
	providers: [SwapiApiService]
})

export default class ShipsComponent implements OnInit {
	ships: Ship[];
	selectedShip: Ship;
	showAdd: true;
	constructor(private swapi: SwapiApiService, private storageService: StorageService) {}
	ngOnInit() {		
		this.getShips();
		this.showAdd = true;
	}

	getShips(): void {
		this.swapi.getShips().then(ships => {
			this.ships = ships;			
		});
	}

	onSelect(ship: Ship) {
		console.log(ship);
		this.selectedShip = ship;
	}
	@HostListener("click", ["$event"])
	onAddShip(ship: Ship) {
		event.stopPropagation();		
		this.storageService.addShip(ship);
	}

	onCloseInfo() {
		this.selectedShip = null;
	}
}
