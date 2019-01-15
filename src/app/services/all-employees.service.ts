import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllEmployeesService {

  constructor(private httpClient:HttpClient) { }

  public getAllEmployees():Observable<Employee[]>{
      return this.httpClient.get<Employee[]>("/assets/json/employees.json");
  }
}

