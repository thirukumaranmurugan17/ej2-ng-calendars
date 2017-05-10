var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, ElementRef, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, applyMixins, FormBase } from '@syncfusion/ej2-ng-base';
import { Calendar } from '@syncfusion/ej2-calendars';
export var inputs = ['depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'locale', 'max', 'min', 'start', 'value', 'weekNumber'];
export var outputs = ['change', 'created', 'destroyed', 'navigated', 'renderDayCell', 'valueChange'];
export var twoWays = ['value'];
/**
 * Represents the EJ2 Angular Calendar Component.
 * ```html
 * <ej-calendar [value]='date'></ej-calendar>
 * ```
 */
var CalendarComponent = (function (_super) {
    __extends(CalendarComponent, _super);
    function CalendarComponent(ngEle) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        for (var i = 1; i < arguments.length; i++) {
            var injectedObj = arguments[i];
            if (injectedObj) {
                _this.injectedModules.push(injectedObj);
            }
        }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        return _this;
    }
    CalendarComponent.prototype.registerOnChange = function (registerFunction) {
    };
    CalendarComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    CalendarComponent.prototype.writeValue = function (value) {
    };
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent.prototype.ngAfterViewInit = function () {
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
    };
    CalendarComponent.prototype.ngAfterContentChecked = function () {
    };
    return CalendarComponent;
}(Calendar));
export { CalendarComponent };
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ej-calendar',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CalendarComponent; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/** @nocollapse */
CalendarComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
applyMixins(CalendarComponent, [FormBase, ComponentBase]);
//# sourceMappingURL=calendar.component.js.map