import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalculation',
  standalone: true
})
export class AgeCalculationPipe implements PipeTransform {

  transform(value: string): number {
    debugger;
    const dob = new Date(value);
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
    var result=  Math.abs(ageDt.getUTCFullYear() - 1970);
    return result
  }

}
