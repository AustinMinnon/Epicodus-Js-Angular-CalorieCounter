import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent],
  template: `
  <new-meal></new-meal>
  <edit-meal-details *ngIf="isEdited" [meal]="selectedMeal"></edit-meal-details>
  <div *ngFor="#currentMeal of mealList">
  <h4 class="mealListItem"
  (click)="mealClicked(currentMeal)">
  {{ currentMeal.name }}
  </h4>
    <meal-display *ngIf="currentMeal === selectedMeal"
    [meal]="currentMeal">
    </meal-display>
  </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Object>;
  public selectedMeal: Meal;
  public isEdited: boolean = false;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.isEdited = true;
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
