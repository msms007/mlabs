Angular 2/4  Date Picker Popup
------------

DatePicker Popup is an angular component wrapping (http://valor-software.com/ngx-bootstrap/#/datepicker) as a popup 

Requirements
------------
* [Bootstrap 3+]
* [font Awesome]
* [ngx-bootstrap DatePicker]

Usage
-----
import {MLabsComponentModule} from './datepicker-popup/datepicker-popup.module';

```
 <mlabs-datepicker-popup [showTodayBtn]="true">
    <datepicker></datepicker>
 </mlabs-datepicker-popup>
 
 OR
 <ng-template #date>
     <datepicker></datepicker>
 </ng-template>
 
 <mlabs-datepicker-popup [showTodayBtn]="true" [body]='date'> 
  </mlabs-datepicker-popup>
 
```
Help
-------------
This component is still under development.

Development guidelines
----------------------


- - -

This software is made available under the open source MIT License. &copy; 2017 
