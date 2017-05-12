import { Pipe, PipeTransform } from '@angular/core';
import { Trick } from './trick.model';

@Pipe({
  name: 'difficulty',
  pure: false
})
export class DifficultyPipe implements PipeTransform {

  transform(input: Trick[], desiredDifficulty) {
    var output: Trick[] = [];
    if (desiredDifficulty === "Beginner") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].difficulty === "Beginner") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDifficulty === "Intermediate") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].difficulty === "Intermediate") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDifficulty === "Advanced") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].difficulty === "Advanced") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDifficulty === "Pro") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].difficulty === "Pro") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
