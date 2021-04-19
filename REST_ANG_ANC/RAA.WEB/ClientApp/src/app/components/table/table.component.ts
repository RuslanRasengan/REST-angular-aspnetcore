import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/models/employee.models';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  employees: IEmployee[] = []

  employee: IEmployee = {id: null, name: null, age: null, phone: null}

  constructor(private dataService: DataService, private router: Router ) { }

  ngOnInit(): void {
    this.getEmployees();
  };


  getEmployees(){
    this.dataService.getEmployees().subscribe((data: IEmployee[]) => this.employees = data)
  }

  removeEmployee(id : number) 
  { 
    this.dataService.removeEmployee(id).subscribe(data => this.employee = data) 
    this.dataService.getEmployees().subscribe((data:IEmployee[]) => this.employees = data)
  }

  updateEmployee(employee: IEmployee){
    this.dataService.updateEmployee(employee).subscribe(data => this.employee = data)
  }

}
