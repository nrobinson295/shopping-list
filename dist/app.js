var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RecipeService } from './services/recipeservice';
import { ShoppingListItem } from './components/ShoppingListItem';
import { ShoppingForm } from './components/ShoppingForm';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/AppComponent';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SetToArrayPipe } from './pipes/setToArray';
import { RecipeForm } from './components/RecipeForm';
import { HttpClientModule } from '@angular/common/http';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ShoppingForm,
            ShoppingListItem,
            SetToArrayPipe,
            RecipeForm
        ],
        imports: [BrowserModule, FormsModule, HttpClientModule],
        providers: [RecipeService],
        bootstrap: [AppComponent],
        schemas: []
    })
], AppModule);
export { AppModule };
platformBrowserDynamic().bootstrapModule(AppModule);
