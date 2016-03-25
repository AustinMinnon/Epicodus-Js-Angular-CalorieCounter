import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: 'calorie',
  pure: true
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorie = parseInt(args[0]);
    if(desiredCalorie >= 300) {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else if (desiredCalorie < 300 && desiredCalorie >0) {
      return input.filter((meal) => {
        return meal.calories < 301;
      });
    } else {
      return input;
    }
  }
}
