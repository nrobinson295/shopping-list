import { Diet, Cuisine, Type, Allergies } from './../models/RecipeOptions';
import { RecipeService } from './../services/recipeservice';
import { Component } from '@angular/core';
import { RecipeModel } from '../models/RecipeModel';
import { enumToArray } from '../models/RecipeOptions';

@Component({
	selector: 'recipe-form',
	template: `
	<form (ngSubmit)="search()">
		<button type="submit">Search</button>	
		<input name="name" [(ngModel)]="name" type="text" placeholder="enter text here" required>
		<div>
			<label for="diet">Diet</label>
			<select id="diet"
			[(ngModel)]="options.diet" name="diet">
				<option value="">None</option>
				<option *ngFor="let diet of diets" [value]="diet">{{diet}}</option>
			</select>

		</div>
		<div>
			<label for="cuisine">Cuisine</label>
			<select id="cuisine"
			[(ngModel)]="options.cuisine" name="cuisine">
				<option value="">Any</option>
				<option *ngFor="let cuisine of cuisines" [value]="cuisine">{{cuisine}}</option>
			</select>

		</div>
		<div>
			<label for="allergy">allergy</label>
			<checkboxes [options]="allergies" (optionsChange)="options.allergies=$event"></checkboxes> 
			

		</div>
		<div>
			<label for="type">Meal</label>
			<select id="type"
			[(ngModel)]="options.type" name="type">
				<option value="">Any</option>
				<option *ngFor="let type of types" [value]="type">{{type}}</option>
			</select>

		</div>
		<div *ngFor="let recipe of recipes" [routerLink]="['recipe',recipe.id]">
			<img [src]="recipe.image">
			<h1>{{recipe.title}}</h1>
			<small>Ready in {{recipe.readyInMinutes}} minutes</small>
			<small>Serving size {{recipe.servings}}</small>
		</div>
	</form>
	`
})
export class RecipeForm {
	name: string;
	recipes: RecipeModel[] = [];
	diets = enumToArray(Diet);
	cuisines = enumToArray(Cuisine);
	allergies = enumToArray(Allergies);
	types = enumToArray(Type);

	options: any = {};
	constructor(private service: RecipeService) {}

	search() {
		this.service
			.search(this.name, this.options)
			.subscribe(items => (this.recipes = items));
	}
}
