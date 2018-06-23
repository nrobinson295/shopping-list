export interface SearchRecipeResponse {
	results: RecipeModel[];
}

export interface RecipeModel {
	id: number;
	title: string;
	readInMinutes: number;
	servings: number;
	image: string;
	imageUrls: string[];
}
