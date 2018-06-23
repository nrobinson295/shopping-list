import { RecipeService } from './../services/recipeservice';
import { Component } from '@angular/core';

@Component({
	selector: 'recipe-form',
	template: `
	<form (ngSubmit)="search()">
	<button type="submit">Search</button>	
	<input name="name" [(ngModel)]="name" type="text" placeholder="enter text here" required>
		
	</form>
	`
})
export class RecipeForm {
	name: string;

	constructor(private service: RecipeService) {}

	search() {
		this.service.search(this.name).subscribe(items => console.log(items));
	}
}
