import {Component, OnInit} from '@angular/core';
import {MLabsDatePickerPopupService} from './datepicker-popup/datepicker-popup.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private datePickerPopupService: MLabsDatePickerPopupService) {
    }

    ngOnInit(): void {

    }

    dateSelected($event) {
        console.log($event);
        this.datePickerPopupService.dateSelectionComplete();
    }
}
