import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from './calendar.module';
/**
 * NgModule definition for the Calendar component with providers.
 */
var CalendarAllModule = (function () {
    function CalendarAllModule() {
    }
    return CalendarAllModule;
}());
export { CalendarAllModule };
CalendarAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CalendarModule],
                exports: [
                    CalendarModule
                ],
                providers: []
            },] },
];
/** @nocollapse */
CalendarAllModule.ctorParameters = function () { return []; };
//# sourceMappingURL=calendar-all.module.js.map