import {
    Component, Output, EventEmitter, AfterViewInit, Input, TemplateRef, HostListener,
    OnDestroy
} from '@angular/core';
import {EventManager} from '@angular/platform-browser';
import {MLabsDatePickerPopupService} from "./datepicker-popup.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'mlabs-datepicker-popup',
    templateUrl: './datepicker-popup.component.html',
    styleUrls: ['./datepicker-popup.component.scss']
})
export class MLabsDatePickerPopupComponent implements AfterViewInit, OnDestroy {
    @Input() body: TemplateRef<any>;
    @Input() hideOnEsc = true;
    @Input() showTodayBtn = false;
    dateModel = new Date();
    @Output() dateModelChange: EventEmitter<Date> = new EventEmitter();
    showDatePicker = false;
    closeSubscription: Subscription;

    constructor(private eventManager: EventManager, private datePickerPopupService: MLabsDatePickerPopupService) {
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
        this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
            this.close();
        });
        this.closeSubscription = this.datePickerPopupService.close$.subscribe(() => {
            this.showDatePicker = false;
        });
    }

    ngOnDestroy(): void {
        if (this.closeSubscription) {
            this.closeSubscription.unsubscribe();
        }
    }

}
