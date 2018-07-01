import { Instructions } from './../models/Instructions';
import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipeservice';
@Component({
	selector: 'recipe',
	template: `
		<div *ngFor="let instruction of instructions">
			<p>{{instruction.name}}</p>
			<div *ngFor="let step of instruction.steps">
			<p>{{step.number}}. {{step.step}}</p>
			</div>
		</div>
	`
})
export class RecipeComponent {
	id: string;
	instructions: Instructions[] = [];
	constructor(
		private route: ActivatedRoute,
		private recipeService: RecipeService,
		private zone: NgZone
	) {}
	ngOnInit() {
		this.route.params.subscribe(param => {
			this.id = param['id'];
			this.getInstructions(this.id);
		});
	}
	getInstructions(id: string) {
		this.recipeService
			.getInstructions(id)
			.subscribe(items => this.zone.run(() => (this.instructions = items)));
	}
}
