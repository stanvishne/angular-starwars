import { Component, OnInit } from '@angular/core';
import { StorageService } from './../shared/storage.service';
import Ship from './../models/ship';
import { Store } from '@ngrx/store';
import { AppState } from './../models/appState';

@Component({
	selector: 'my-selected-list',
	templateUrl: './selected.component.html',
	styleUrls: ['./selected.component.scss']
})

export class SelectedComponent implements OnInit{
	ships: object[];
	storeShips: any;
	selectedShip: Ship;

	constructor(private storageService: StorageService, private store: Store<AppState>) {
		this.store.select('selected').subscribe((v: any)=>{			
			console.log(v);
			this.storeShips = v.ships;			
		});
	}

	ngOnInit() {				
	}
	
	onDelete(item: Ship) {
		 this.storageService.deleteShip(item);		
	}

	onSelectShip(ship: Ship) {
		this.selectedShip = ship;
	}

	onCloseInfo() {
		this.selectedShip = null;
	}
}