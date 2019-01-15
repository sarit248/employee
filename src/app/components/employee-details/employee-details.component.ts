import { Component, OnInit, Input } from '@angular/core';
import { AllEmployeesService } from '../../services/all-employees.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

    public employee: Employee;

    @Input()
    public empId: string;

    constructor(private activatedRoute: ActivatedRoute,
        private allEmployeesService: AllEmployeesService) { }

    ngOnInit() {
        let employeeID = parseInt(this.empId);
        // let employeeID = this.activatedRoute.snapshot.params["employeeID"];
        // employeeID = parseInt( employeeID);


        this.allEmployeesService.getAllEmployees().subscribe((allEmployees) => {
            for (let i = 0; i < allEmployees.length; i++) {
                if (allEmployees[i].employeeID === employeeID) {
                    this.employee = allEmployees[i];
                    break;
                }
            }
        });
    }
}
