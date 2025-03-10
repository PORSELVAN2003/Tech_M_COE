import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFormatter',
  standalone: true
})
export class SalaryFormatterPipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  }
}