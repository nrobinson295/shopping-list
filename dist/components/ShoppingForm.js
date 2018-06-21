var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let ShoppingForm = class ShoppingForm {
    constructor() {
        this.price = 0;
    }
    addItem() { }
};
ShoppingForm = __decorate([
    Component({
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
], ShoppingForm);
export { ShoppingForm };
