import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee.models';
import { INewEmployee } from '../models/new-employee.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly url: string = "https://localhost:5001/api/home"

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this.url)
  }

  public removeEmployee(id: number):Observable<IEmployee>
  {
    return this.http.delete<IEmployee>(`${this.url}/${id}`)
  }

  public postEmployee(newEmployee: INewEmployee): Observable<any> {
    return this.http.post<void>(this.url, newEmployee);
  }


  public updateEmployee(employee: IEmployee):Observable<IEmployee>{
    return this.http.put<IEmployee>(`${this.url}/${employee.id}`, employee)
  }

  public getById(id: number):Observable<IEmployee>{
    return this.http.get<IEmployee>(`${this.url}/${id}`)
  } 
}
