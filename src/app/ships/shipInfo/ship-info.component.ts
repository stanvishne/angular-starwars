import { Component, Input } from '@angular/core';
import Ship from '../../models/ship';

@Component({
	selector: 'my-ship-info',
	templateUrl: './ship-info.component.html',
	styleUrls: ['./ship-info.component.scss']
})

export default class ShipInfo {
	@Input() ship: Ship
	
	onAdd(ship) {
		console.log(ship);
	}
}