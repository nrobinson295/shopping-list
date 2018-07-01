import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SetToArrayPipe } from './pipes/setToArray';
import { RecipeService } from './services/recipeservice';
import { AppComponent } from './components/AppComponent';
import { RecipeForm } from './components/RecipeForm';
import { Checkboxes } from './components/checkboxes';
import { ShoppingListItem } from './components/ShoppingListItem';
import { ShoppingForm } from './components/ShoppingForm';
import { RecipeComponent } from './components/RecipeComponent';
import { HomeComponent } from './components/HomeComponent';

const ROUTES = [
	{ path: '', component: HomeComponent },
	{ path: 'recipe/:id', component: RecipeComponent }
];
@NgModule({
	declarations: [
		AppComponent,
		ShoppingForm,
		ShoppingListItem,
		SetToArrayPipe,
		RecipeForm,
		Checkboxes,
		HomeComponent,
		RecipeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(ROUTES, { useHash: true })
	],
	providers: [RecipeService],
	bootstrap: [AppComponent],
	schemas: []
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
