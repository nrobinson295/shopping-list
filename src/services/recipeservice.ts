import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchRecipeResponse, RecipeModel } from './../models/RecipeModel';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RecipeService {
	constructor(private http: HttpClient) {}

	search(
		query: string,
		diet?: string,
		excludeIngredients?: string[],
		intolerances?: string[],
		type?: string
	): Observable<RecipeModel[]> {
		return this.http
			.get<SearchRecipeResponse>(
				'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
				{
					headers: this.getHeaders(),
					params: this.getSearchParams(
						query,
						diet,
						excludeIngredients,
						intolerances,
						type
					)
				}
			)
			.pipe(map(response => response.results));
	}

	getHeaders(): HttpHeaders {
		return new HttpHeaders({
			'X-Mashape-Key': 'HPwCrnuZd5mshQmhaR4oYlxWpiMOp1XOyrxjsnalNueCpe0Da4',
			'X-Mashape-Host': 'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
		});
	}

	getSearchParams(
		query: string,
		diet?: string,
		excludeIngredients?: string[],
		intolerances?: string[],
		type?: string
	): any {
		const result: any = {
			query,
			number: '5',
			offset: '0',
			limitLicense: 'true',
			instructionsRequired: 'true'
		};
		if (!!diet) {
			result.diet = diet;
		}
		if (!!excludeIngredients) {
			result.excludeIngredients = excludeIngredients;
		}
		if (!!intolerances) {
			result.intolerances = intolerances;
		}
		if (!!type) {
			result.type = type;
		}
		return result;
	}
}
