import {
	Component,
	Input,
	HostListener,
	Output,
	EventEmitter
} from '@angular/core';

@Component({
	selector: 'shopping-list-item',
	template: `
	<li>
		<div class="item-name" [class.checked-off]="checked">{{item}}</div>
		<i (click)="remove($event)">x</i>
	</li>
	`
})
export class ShoppingListItem {
	@Input() item: string;
	@Output() removeItem = new EventEmitter<string>();
	checked: boolean = false;

	@HostListener('click')
	checkOff() {
		this.checked = !this.checked;
	}

	remove(event: Event) {
		event.stopPropagation();
		this.removeItem.next(this.item);
	}
}
