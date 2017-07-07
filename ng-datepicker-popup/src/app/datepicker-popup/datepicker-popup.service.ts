import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MLabsDatePickerPopupService {
    private subject = new Subject();
    close$: Observable<any> = this.subject.asObservable();

    constructor() {
    }

    dateSelectionComplete(): void {
        this.subject.next();
    }
}
