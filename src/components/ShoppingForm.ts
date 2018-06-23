import { Component } from '@angular/core';

@Component({
	selector: 'shopping-form',
	template: `
		<form class="nav-bar" (ngSubmit)="addItem()">
			<div>
				<button type="submit">Add</button>
				<input name="name" [(ngModel)]="name" type="text" placeholder="enter text here" class="txt-item-name" required>
			</div>
			
		</form>
		<div class="list-container">
			<div class="list-header">List</div>
			<ul class="list" *ngFor="let item of list | setToArray">
				<shopping-list-item [item]="item" (removeItem)="removeItem($event)"></shopping-list-item>				
			</ul>
		</div>
	`
})
export class ShoppingForm {
	name: string;
	list = new Set<string>();
	addItem() {
		this.list.add(this.name);
		this.name = '';
	}
	removeItem(item: string) {
		this.list.delete(item);
	}

	trackByFn(index: number) {
		return index;
	}
}
