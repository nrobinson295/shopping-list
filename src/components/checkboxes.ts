import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'checkboxes',
	template: `
	<div *ngFor="let option of _options">	
		<input type="checkbox"  [ngModel]="option.value" (ngModelChange)="setOption(option.key,$event)"> {{option.key}}
	</div>
	`
})
export class Checkboxes {
	@Input() options: string[];
	@Output() optionsChange = new EventEmitter<string[]>();
	_options: { key: string; value: boolean }[] = [];

	ngOnInit() {
		this._options = this.options.map(option => {
			return { key: option, value: false };
		});
	}
	setOption(key: string, chosen: boolean) {
		this._options.forEach(option => {
			if (option.key === key) {
				option.value = chosen;
			}
		});
		let selected: string[] = [];
		this._options.forEach(option => {
			if (option.value === true) {
				selected.push(option.key);
			}
		});
		this.optionsChange.next(selected);
	}
}
