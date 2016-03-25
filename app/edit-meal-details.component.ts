import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  outputs: ['closeEdit'],
  template: `
  <div>
    <h4> Edit Meal: </h4>
    <input [(ngModel)]="meal.name" class="input-md"/>
    <input [(ngModel)]="meal.description" class="input-md"/>
    <input [(ngModel)]="meal.calories" class="input-md"/>
    <button (click)="submitEdit()" class="btn-warning btn-sm">close</button>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public closeEdit: EventEmitter<Object>;
  constructor() {
    this.closeEdit = new EventEmitter();
  }
  submitEdit(){
    this.closeEdit.emit(new Object());
  }
}
