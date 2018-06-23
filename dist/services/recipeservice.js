var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let RecipeService = class RecipeService {
    constructor(http) {
        this.http = http;
    }
    search(query, diet, excludeIngredients, intolerances, type) {
        return this.http
            .get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search', {
            headers: this.getHeaders(),
            params: this.getSearchParams(query, diet, excludeIngredients, intolerances, type)
        })
            .pipe(map(response => response.results));
    }
    getHeaders() {
        return new HttpHeaders({
            'X-Mashape-Key': 'HPwCrnuZd5mshQmhaR4oYlxWpiMOp1XOyrxjsnalNueCpe0Da4',
            'X-Mashape-Host': 'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
        });
    }
    getSearchParams(query, diet, excludeIngredients, intolerances, type) {
        const result = {
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
};
RecipeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], RecipeService);
export { RecipeService };
