// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { Employee } from '../models/employee.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {
//   private apiUrl = 'https://api.example.com/employees'; // Replace with your actual API endpoint
//   private employeesSubject = new BehaviorSubject<Employee[]>([]);
//   employees$ = this.employeesSubject.asObservable();

//   constructor(private http: HttpClient) {
//     this.loadInitialData();
//   }

//   private loadInitialData() {
//     // Mock initial data
//     const initialData: Employee[] = [
//       {
//         id: 1,
//         name: 'John Doe',
//         email: 'john@example.com',
//         department: 'IT',
//         position: 'Developer',
//         salary: 75000,
//         joinDate: new Date('2023-01-15')
//       },
//       {
//         id: 2,
//         name: 'Jane Smith',
//         email: 'jane@example.com',
//         department: 'HR',
//         position: 'Manager',
//         salary: 85000,
//         joinDate: new Date('2022-06-20')
//       }
//     ];
//     this.employeesSubject.next(initialData);
//   }

//   getEmployees(): Observable<Employee[]> {
//     return this.employees$;
//   }

//   getEmployeeById(id: number): Observable<Employee | undefined> {
//     return new Observable(observer => {
//       const employee = this.employeesSubject.value.find(emp => emp.id === id);
//       observer.next(employee);
//       observer.complete();
//     });
//   }

//   addEmployee(employee: Employee): void {
//     const employees = [...this.employeesSubject.value, employee];
//     this.employeesSubject.next(employees);
//   }

//   updateEmployee(updatedEmployee: Employee): void {
//     const employees = this.employeesSubject.value.map(emp => 
//       emp.id === updatedEmployee.id ? updatedEmployee : emp
//     );
//     this.employeesSubject.next(employees);
//   }

//   deleteEmployee(id: number): void {
//     const employees = this.employeesSubject.value.filter(emp => emp.id !== id);
//     this.employeesSubject.next(employees);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://api.example.com/employees'; // Replace with your actual API endpoint
  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employeesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {
    // Mock initial data with ratings
    const initialData: Employee[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        department: 'IT',
        position: 'Developer',
        salary: 75000,
        joinDate: new Date('2023-01-15'),
        rating: 4 // New rating field
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        department: 'HR',
        position: 'Manager',
        salary: 85000,
        joinDate: new Date('2022-06-20'),
        rating: 5 // New rating field
      }
    ];
    this.employeesSubject.next(initialData);
  }

  getEmployees(): Observable<Employee[]> {
    return this.employees$;
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    return new Observable(observer => {
      const employee = this.employeesSubject.value.find(emp => emp.id === id);
      observer.next(employee);
      observer.complete();
    });
  }

  addEmployee(employee: Employee): void {
    const employees = [...this.employeesSubject.value, employee];
    this.employeesSubject.next(employees);
  }

  updateEmployee(updatedEmployee: Employee): void {
    const employees = this.employeesSubject.value.map(emp => 
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    this.employeesSubject.next(employees);
  }

  updateEmployeeRating(id: number, newRating: number): void {
    const employees = this.employeesSubject.value.map(emp => 
      emp.id === id ? { ...emp, rating: newRating } : emp
    );
    this.employeesSubject.next(employees);
  }

  deleteEmployee(id: number): void {
    const employees = this.employeesSubject.value.filter(emp => emp.id !== id);
    this.employeesSubject.next(employees);
  }
}
