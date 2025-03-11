

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { SalaryFormatterPipe } from '../../pipes/salary-formatter.pipe';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule, RouterModule, SalaryFormatterPipe],
  template: `
    <div class="employee-card">
      <h3>{{ employee.name }}</h3>
      <p>{{ employee.position }}</p>
      <p>{{ employee.department }}</p>
      <p>{{ employee.salary | salaryFormatter }}</p>

      <!-- Ratings Section -->
      <div class="ratings">
        <span *ngFor="let star of getStars(); let i = index" 
              [class.filled]="i < employee.rating">★</span>
      </div>

      <div class="actions">
        <button [routerLink]="['/edit', employee.id]">Edit</button>
        <button (click)="onDelete()">Delete</button>
      </div>
    </div>
  `,
  styles: [`
    .employee-card {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: white;
      text-align: center;
    }
    .ratings {
      margin: 10px 0;
      font-size: 20px;
      color: #ddd;
    }
    .filled {
      color: gold;
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 10px;
      justify-content: center;
    }
    button {
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.employee.id);
  }

  // Returns an array of 5 elements for star ratings
  getStars(): number[] {
    return new Array(5);
  }
}
