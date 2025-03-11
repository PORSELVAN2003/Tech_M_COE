
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { SalaryFormatterPipe } from '../../pipes/salary-formatter.pipe';
import { DepartmentFilterPipe } from '../../pipes/department-filter.pipe';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    EmployeeCardComponent,
    SalaryFormatterPipe,
    DepartmentFilterPipe
  ],
  template: `
    <div class="container">
      <h2>Employee List</h2>
      
      <div class="controls">
        <div class="department-filter">
          <label for="department">Filter by Department:</label>
          <select 
            id="department" 
            [(ngModel)]="selectedDepartment"
            class="department-select"
          >
            <option value="All">All Departments</option>
            <option *ngFor="let dept of departments">{{ dept }}</option>
          </select>
        </div>
        <button [routerLink]="['/add']" class="btn-add">Add Employee</button>
      </div>
      
      <div class="employee-grid">
        <app-employee-card
          *ngFor="let employee of employees | departmentFilter:selectedDepartment"
          [employee]="employee"
          (delete)="onDeleteEmployee($event)"
        ></app-employee-card>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .department-filter {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .department-select {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      min-width: 200px;
    }
    .employee-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .btn-add {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  departments: string[] = [];
  selectedDepartment: string = 'All';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.departments = [...new Set(employees.map(emp => emp.department))].sort();
    });
  }

  onDeleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }
}