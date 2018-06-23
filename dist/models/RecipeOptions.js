export var Diet;
(function (Diet) {
    Diet["PESCETARIAN"] = "pescetarian";
    Diet["LACTO"] = "lacto vegetarian";
    Diet["OVO"] = "ovo o vegetarian";
    Diet["VEGAN"] = "vegan";
    Diet["VEGETARIAN"] = "vegetarian";
})(Diet || (Diet = {}));
export var Cuisine;
(function (Cuisine) {
    Cuisine["AFRICAN"] = "african";
    Cuisine["CHINESE"] = "chinese";
    Cuisine["JAPANESE"] = "japanese";
    Cuisine["KOREAN"] = "korean";
    Cuisine["VIETNAMESE"] = "vietnamese";
    Cuisine["THAI"] = "thai";
    Cuisine["INDIAN"] = "indian";
    Cuisine["BRITISH"] = "british";
    Cuisine["IRISH"] = "irish";
    Cuisine["FRENCH"] = "french";
    Cuisine["ITALIAN"] = "italian";
    Cuisine["MEXICAN"] = "mexican";
    Cuisine["SPANISH"] = "spanish";
    Cuisine["EASTERN"] = "middle eastern";
    Cuisine["JEWISH"] = "jewish";
    Cuisine["AMERICAN"] = "american";
    Cuisine["CAJUN"] = "cajun";
    Cuisine["SOUTHERN"] = "southern";
    Cuisine["GREEK"] = "greek";
    Cuisine["GERMAN"] = "german";
    Cuisine["NORDIC"] = "nordic";
    Cuisine["EUROPEAN"] = "eastern european";
    Cuisine["CARRIBEAN"] = "carribean";
    Cuisine["LATIN"] = "latin american";
})(Cuisine || (Cuisine = {}));
export var Allergies;
(function (Allergies) {
    Allergies["DAIRY"] = "dairy";
    Allergies["EGG"] = "egg";
    Allergies["GLUTEN"] = "gluten";
    Allergies["PEANUT"] = "peanut";
    Allergies["SESAME"] = "sesame";
    Allergies["SEAFOOD"] = "seafood";
    Allergies["SHELLFISH"] = "shellfish";
    Allergies["SOY"] = "soy";
    Allergies["SULFITE"] = "sulfite";
    Allergies["NUTS"] = "tree nut";
    Allergies["WHEAT"] = "wheat";
})(Allergies || (Allergies = {}));
export var Type;
(function (Type) {
    Type["MAIN"] = "main course";
    Type["SIDE"] = "side dish";
    Type["DESSERT"] = "dessert";
    Type["APP"] = "appetizer";
    Type["SALAD"] = "salad";
    Type["BREAD"] = "bread";
    Type["BREAKFAST"] = "breakfast";
    Type["SOUP"] = "soup";
    Type["BEVERAGE"] = "beverage";
    Type["SAUCE"] = "sauce";
    Type["DRINK"] = "drink";
})(Type || (Type = {}));
export const RecipeOptions = {
    Diet,
    Cuisine,
    Allergies,
    Type
};
