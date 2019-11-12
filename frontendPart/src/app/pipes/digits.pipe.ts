import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digits'
})
export class DigitsPipe implements PipeTransform {
  transform(value: number, digits:number): any {
    return value.toFixed(digits);
  }

}
