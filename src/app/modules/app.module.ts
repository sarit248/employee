import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { EmployeesComponent } from '../components/employees/employees.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { DateComponent } from '../components/date/date.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeDetailsComponent } from '../components/employee-details/employee-details.component';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';



@NgModule({
    declarations: [

        LayoutComponent,

        HeaderComponent,

        FooterComponent,

        EmployeesComponent,

        ThumbnailComponent,

        DateComponent,

        EmployeeDetailsComponent,

        MenuComponent
    ],


    imports: [
        BrowserModule,
        HttpClientModule,
        RoutingModule,
        RouterModule


    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
