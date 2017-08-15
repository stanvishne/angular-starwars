import { Component, Input, Output, EventEmitter } from '@angular/core';
import Ship from '../../models/ship';
import { StorageService } from './../../shared/storage.service';
@Component({
	selector: 'my-ship-info',
	templateUrl: './ship-info.component.html',
	styleUrls: ['./ship-info.component.scss']
})

export default class ShipInfo {
	constructor(private storageService: StorageService) {}
	@Input() ship: Ship
	@Output() onCloseInfo = new EventEmitter<boolean>();
	@Output() showAdd: boolean;
	onAdd(ship) {		
		this.storageService.addShip(ship);
	}

	onClose() {
		this.onCloseInfo.emit();
	}
}