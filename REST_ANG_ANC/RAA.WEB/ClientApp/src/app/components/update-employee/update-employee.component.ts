import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
import { IEmployee } from '../../models/employee.models';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.sass']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: IEmployee = {id: null, name: null, age: null, phone: null}

  constructor(private rout: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    let id = this.rout.snapshot.params.id;
    this.dataService.getById(id).subscribe((data: IEmployee) => {

      this.employee = data
    })
  }

  update(){
    
    this.dataService.updateEmployee(this.employee).subscribe(() => {
      this.router.navigate(['employees'])
    })
  }

}