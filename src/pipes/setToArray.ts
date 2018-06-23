import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'setToArray', pure: false })
export class SetToArrayPipe implements PipeTransform {
	transform(value: Set<string>): string[] {
		return Array.from(value.values());
	}
}
