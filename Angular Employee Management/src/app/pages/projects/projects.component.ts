import { Component, OnInit } from '@angular/core';
import { project } from '../../model/project';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
 projectList:project[] = []

 constructor(private api:ApiService){
 }

 ngOnInit(){ 
       this.api.getProducts().subscribe({
           next:(result:project[])=>this.projectList = result,
           error:(error)=>console.log(error)
       });
 
   }
}