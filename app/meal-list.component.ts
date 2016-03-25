import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onCalories($event.target.value)" class="filter">
    <option value="-1" selected>All Meals</option>
    <option value="299"> Healthy </option>
    <option value="300"> Unhealthy </option>
  </select>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  <edit-meal-details *ngIf="isEdited" [meal]="selectedMeal" (closeEdit)="onEdit()"></edit-meal-details>
  <div *ngFor="#currentMeal of mealList | calorie:filterCalories">
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
  public filterCalories: number = -1;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.isEdited = true;
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  onEdit() {
  this.isEdited = false;
  }
  onCalories(filterOption) {
  this.filterCalories = filterOption;
  }
  createMeal(mealProperties: any[]): void{
  this.mealList.push(
    new Meal(mealProperties[0], mealProperties[1], mealProperties[2])
  );
  }
}
