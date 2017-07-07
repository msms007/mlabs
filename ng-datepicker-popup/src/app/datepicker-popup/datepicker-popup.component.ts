import {Component, Output, EventEmitter, AfterViewInit, Input, TemplateRef} from '@angular/core';
import {EventManager} from '@angular/platform-browser';

@Component({
    selector: 'mlabs-datepicker-popup',
    templateUrl: './datepicker-popup.component.html',
    styleUrls: ['./datepicker-popup.component.scss']
})
export class MLabsDatePickerPopupComponent implements AfterViewInit {
    @Input() body: TemplateRef<any>;
    @Input() hideOnEsc = true;
    @Input() showTodayBtn = false;
    dateModel = new Date();
    @Output() dateModelChange: EventEmitter<Date> = new EventEmitter();
    showDatePicker = false;

    constructor(private eventManager: EventManager) {

    }


    today(): void {
        this.apply();
        this.close();
    }

    private apply(): void {
        this.dateModelChange.emit(this.dateModel);
    }

    close() {
        this.showDatePicker = false;
    }

    onSelectionDone(event) {
        this.dateModel = event;
        this.apply();
        this.close();
    }

    ngAfterViewInit() {
        this.dateModel = new Date();
        this.eventManager.addGlobalEventListener("window", 'keyup.esc', () => {
            this.close();
        });
    }
}
