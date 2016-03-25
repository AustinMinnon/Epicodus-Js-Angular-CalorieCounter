import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="container">
      <h3>Submit Meal Below:</h3>
      <input placeholder="Food" class="input-md" #newName>
      <input placeholder="Description" class="input-md" #newDescription>
      <input placeholder="Calories" class="input-md" #newCalories>
      <button (click)="addMeal(newName, newDescription, newCalories)" class="btn-success btn-sm">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDescription: HTMLInputElement, newCalories:HTMLInputElement){
    var mealProperties:Array<any> = [newName.value, newDescription.value, newCalories.value];
    this.onSubmitNewMeal.emit(mealProperties);
    newName.value = "";
    newDescription.value = "";
    newCalories.value = "";
  }
}
