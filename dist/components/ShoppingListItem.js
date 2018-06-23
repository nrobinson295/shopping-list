var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
let ShoppingListItem = class ShoppingListItem {
    constructor() {
        this.removeItem = new EventEmitter();
        this.checked = false;
    }
    checkOff() {
        this.checked = !this.checked;
    }
    remove(event) {
        event.stopPropagation();
        this.removeItem.next(this.item);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "item", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ShoppingListItem.prototype, "removeItem", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShoppingListItem.prototype, "checkOff", null);
ShoppingListItem = __decorate([
    Component({
        selector: 'shopping-list-item',
        template: `
	<li>
		<div class="item-name" [class.checked-off]="checked">{{item}}</div>
		<i (click)="remove($event)">x</i>
	</li>
	`
    })
], ShoppingListItem);
export { ShoppingListItem };
