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

@NgModule({
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
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
