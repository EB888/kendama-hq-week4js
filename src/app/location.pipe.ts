import { Pipe, PipeTransform } from '@angular/core';
import { KendamaPlayer } from './kendama-player.model';

@Pipe({
  name: 'location',
  pure: false
})
export class LocationPipe implements PipeTransform {

  transform(input: KendamaPlayer[], desiredLocation) {
    var output: KendamaPlayer[] = [];
    if (desiredLocation === "West Coast") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].location === "West Coast") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLocation === "East Coast") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].location === "East Coast") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLocation === "Central US") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].location === "Central US") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLocation === "Anywhere Else") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].location != ("West Coast") &&
            input[i].location != ("East Coast") &&
            input[i].location != ("Central US")) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
