import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['task'],
  template: `
  `
})
export class EditMealDetailsComponent {
public meal: Meal;
}
