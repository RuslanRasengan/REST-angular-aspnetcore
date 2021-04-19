import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/models/employee.models';
import { INewEmployee } from 'src/app/models/new-employee.models';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent {

  newEmployees: INewEmployee[] = [];

  newEmployee: INewEmployee = {name: null, age: null, phone: null };

  constructor(private dataService: DataService, private router: Router) { }

  postEmployee(newEmployee: INewEmployee){
    this.dataService.postEmployee(newEmployee).subscribe(() => { this.router.navigate(['employees'])})
  }
}
