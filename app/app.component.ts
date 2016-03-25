import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives:[MealListComponent],
  template: `
  <div class="container">
    <h2>Calorie Counter Log</h2>
    <hr>
    <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  public meal: Meal;
  constructor() {
    this.meals = [
      new Meal("Bacon Cheese Burger", "with Cajun fries", 650),
      new Meal("2 slices pepperoni pizza", "i splurged", 500),
      new Meal("Fruit Smoothie", "a great start to my day", 200),
      new Meal("banana", "an additional energy boost", 100)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
