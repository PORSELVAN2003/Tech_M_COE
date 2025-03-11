
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  import {AppRoutingModule} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { SalaryFormatterPipe } from './pipes/salary-formatter.pipe';
import { DepartmentFilterPipe } from './pipes/department-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
    EmployeeCardComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    SalaryFormatterPipe,
    DepartmentFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
