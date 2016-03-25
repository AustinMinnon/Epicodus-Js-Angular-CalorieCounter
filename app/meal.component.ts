import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';


@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <p>Comments: {{ meal.description}} </p>
  <p>Calories: {{ meal.calories}} </p>
  <edit-food [food] = food></edit-food>
  `
})

export class MealComponent {
  public meal: Meal;
}
