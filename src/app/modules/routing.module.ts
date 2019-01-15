import { NgModule } from '@angular/core';
import { EmployeesComponent } from '../components/employees/employees.component';
import { EmployeeDetailsComponent } from '../components/employee-details/employee-details.component';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EmployeesComponent }
  // { path: 'one-employee/:employeeID', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class RoutingModule {}
