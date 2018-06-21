import { Component } from '@angular/core';

@Component({
	selector: 'shopping-form',
	template: `
		<form class="nav-bar" (ngSubmit)="addItem()">
			<div>
				<button type="submit">Add</button>
				<input name="name" [(ngModel)]="name" type="text" placeholder="enter text here" class="txt-item-name" required>
			</div>
			<div class="price">Price
				<input name="price" [(ngModel)]="price" type="number" name="price" placeholder="$" class="txt-item-price" required>
			</div>

		</form>
	`
})
export class ShoppingForm {
	name: string;
	price: number = 0;
	addItem() {}
}
