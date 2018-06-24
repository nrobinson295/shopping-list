export enum Diet {
	PESCETARIAN = 'pescetarian',
	LACTO = 'lacto vegetarian',
	OVO = 'ovo o vegetarian',
	VEGAN = 'vegan',
	VEGETARIAN = 'vegetarian'
}

export enum Cuisine {
	AFRICAN = 'african',
	CHINESE = 'chinese',
	JAPANESE = 'japanese',
	KOREAN = 'korean',
	VIETNAMESE = 'vietnamese',
	THAI = 'thai',
	INDIAN = 'indian',
	BRITISH = 'british',
	IRISH = 'irish',
	FRENCH = 'french',
	ITALIAN = 'italian',
	MEXICAN = 'mexican',
	SPANISH = 'spanish',
	EASTERN = 'middle eastern',
	JEWISH = 'jewish',
	AMERICAN = 'american',
	CAJUN = 'cajun',
	SOUTHERN = 'southern',
	GREEK = 'greek',
	GERMAN = 'german',
	NORDIC = 'nordic',
	EUROPEAN = 'eastern european',
	CARRIBEAN = 'carribean',
	LATIN = 'latin american'
}

export enum Allergies {
	DAIRY = 'dairy',
	EGG = 'egg',
	GLUTEN = 'gluten',
	PEANUT = 'peanut',
	SESAME = 'sesame',
	SEAFOOD = 'seafood',
	SHELLFISH = 'shellfish',
	SOY = 'soy',
	SULFITE = 'sulfite',
	NUTS = 'tree nut',
	WHEAT = 'wheat'
}

export enum Type {
	MAIN = 'main course',
	SIDE = 'side dish',
	DESSERT = 'dessert',
	APP = 'appetizer',
	SALAD = 'salad',
	BREAD = 'bread',
	BREAKFAST = 'breakfast',
	SOUP = 'soup',
	BEVERAGE = 'beverage',
	SAUCE = 'sauce',
	DRINK = 'drink'
}

export const RecipeOptions = {
	Diet,
	Cuisine,
	Allergies,
	Type
};

export function enumToArray(item: any): string[] {
	return Object.keys(item).map(key => item[key]);
}
