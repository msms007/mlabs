import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DatepickerModule} from 'ngx-bootstrap/datepicker';
import {MLabsDatePickerPopupComponent} from './datepicker-popup.component';
@NgModule({
    declarations: [MLabsDatePickerPopupComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DatepickerModule.forRoot()],
    exports: [MLabsDatePickerPopupComponent]
})
export class MLabsComponentModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MLabsComponentModule,
            providers: []
        }
    }
}
