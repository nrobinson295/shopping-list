export interface Instructions {
	name: string;
	steps: Step[];
}

export interface Step {
	number: number;
	step: string;
	ingredients: Ingredient[];
	length: {
		number: number;
		unit: string;
	};
}

export interface Ingredient {
	id: number;
	name: string;
	image: string;
}
