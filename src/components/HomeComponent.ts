import { Component } from '@angular/core';
@Component({
	selector: 'home',
	template: `<h1 class="recipe">Recipe</h1>
		<recipe-form></recipe-form>
		<h2 class="shopping-list">Shopping List</h2>
		<shopping-form></shopping-form>`
})
export class HomeComponent {}
