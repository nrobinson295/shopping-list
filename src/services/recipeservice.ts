import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchRecipeResponse, RecipeModel } from './../models/RecipeModel';
import { Instructions } from './../models/Instructions';

const IMAGE_URL = 'https://spoonacular.com/recipeImages/';

@Injectable()
export class RecipeService {
	constructor(private http: HttpClient) {}

	search(query: string, options?: any): Observable<RecipeModel[]> {
		return this.http
			.get<SearchRecipeResponse>(
				'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
				{
					headers: this.getHeaders(),
					params: this.getSearchParams(
						query,
						options.diet,
						options.excludeIngredients,
						options.intolerances,
						options.type
					)
				}
			)
			.pipe(
				map(response => response.results),
				map(result =>
					result.map(item => {
						item.image = IMAGE_URL + item.image;
						return item;
					})
				)
			);
	}

	getInstructions(id: number): Observable<Instructions[]> {
		return this.http.get<Instructions[]>(
			`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/analyzedInstructions`,
			{
				headers: this.getHeaders(),
				params: { stepBreakdown: 'false' }
			}
		);
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
			limitLicense: 'false',
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
