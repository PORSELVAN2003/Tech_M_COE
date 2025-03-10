// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { EmployeeService } from '../../services/employee.service';

// @Component({
//   selector: 'app-employee-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './employee-form.component.html',
//   styleUrls: ['./employee-form.component.css']
// })
// export class EmployeeFormComponent implements OnInit {
//   employeeForm: FormGroup;
//   isEditMode = false;
//   employeeId?: number;

//   constructor(
//     private fb: FormBuilder,
//     private employeeService: EmployeeService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {
//     this.employeeForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       department: ['', Validators.required],
//       position: ['', Validators.required],
//       salary: ['', [Validators.required, Validators.min(0)]],
//       joinDate: [new Date()]
//     });
//   }

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.isEditMode = true;
//       this.employeeId = +id;
//       this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
//         if (employee) {
//           this.employeeForm.patchValue(employee);
//         }
//       });
//     }
//   }

//   onSubmit() {
//     if (this.employeeForm.valid) {
//       const employeeData = this.employeeForm.value;

//       if (this.isEditMode && this.employeeId) {
//         employeeData.id = this.employeeId;
//         this.employeeService.updateEmployee(employeeData);
//       } else {
//         employeeData.id = Date.now(); // Simple ID generation
//         this.employeeService.addEmployee(employeeData);
//       }

//       this.router.navigate(['/']);
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  isEditMode = false;
  employeeId?: number;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      joinDate: [new Date()],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]] // New field
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.employeeId = +id;
      this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
        if (employee) {
          this.employeeForm.patchValue(employee);
        }
      });
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeData = this.employeeForm.value;

      if (this.isEditMode && this.employeeId) {
        employeeData.id = this.employeeId;
        this.employeeService.updateEmployee(employeeData);
      } else {
        employeeData.id = Date.now(); // Simple ID generation
        this.employeeService.addEmployee(employeeData);
      }

      this.router.navigate(['/']);
    }
  }
}
