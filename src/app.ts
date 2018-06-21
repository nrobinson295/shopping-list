import { ShoppingForm } from './components/ShoppingForm';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/AppComponent';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
	declarations: [AppComponent, ShoppingForm],
	imports: [BrowserModule, FormsModule],
	bootstrap: [AppComponent],
	schemas: []
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
