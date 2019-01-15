import { Component, OnInit } from '@angular/core';
import { AllEmployeesService } from '../../services/all-employees.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public allEmployees: Employee[];
  public myEmpId: string;

  constructor(private allEmployeesService: AllEmployeesService) {}

  ngOnInit() {
    this.allEmployeesService.getAllEmployees().subscribe(dudi => {
      this.allEmployees = dudi;
      console.log(this.allEmployees);
    });
  }

  public test(id: string) {
    this.myEmpId = id;
  }
}

// let x=function(){
//     gxgddx();
//   };

//   ley y=(()=>{
//     dslkgg
//   });

//   (function()=>{
//     dsvsg
//   })();
