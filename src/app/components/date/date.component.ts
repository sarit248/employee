import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

    @Input()//don't forget!!
    // public birthDate: string;//yyyy-mm-dd;
    public birthDate: Date;//yyyy-mm-dd;


    // public date: Date;

    ngOnInit() {
        // let year = Number(this.birthDate.substr(0, 4));  
        // let month = Number(this.birthDate.substr(5, 2)) - 1;  
        // let day = Number(this.birthDate.substr(8, 2));   

        // this.date = new Date(year, month, day);
    }

}
