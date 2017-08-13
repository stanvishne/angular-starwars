import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'object'
})

export class ObjectForPipe implements PipeTransform {
	transform(value: any): any {
		return typeof value!=='object' ? [] : Object.keys(value);
	}
}