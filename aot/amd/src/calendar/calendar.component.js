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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/forms", "@syncfusion/ej2-ng-base", "@syncfusion/ej2-calendars"], function (require, exports, core_1, forms_1, ej2_ng_base_1, ej2_calendars_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inputs = ['depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'locale', 'max', 'min', 'start', 'value', 'weekNumber'];
    exports.outputs = ['change', 'created', 'destroyed', 'navigated', 'renderDayCell', 'valueChange'];
    exports.twoWays = ['value'];
    var CalendarComponent = CalendarComponent_1 = (function (_super) {
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
            _this.registerEvents(exports.outputs);
            _this.addTwoWay.call(_this, exports.twoWays);
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
    }(ej2_calendars_1.Calendar));
    CalendarComponent = CalendarComponent_1 = __decorate([
        core_1.Component({
            selector: 'ej-calendar',
            inputs: exports.inputs,
            outputs: exports.outputs,
            template: '',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CalendarComponent_1; }),
                    multi: true
                }
            ],
            queries: {}
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], CalendarComponent);
    exports.CalendarComponent = CalendarComponent;
    ej2_ng_base_1.applyMixins(CalendarComponent, [ej2_ng_base_1.FormBase, ej2_ng_base_1.ComponentBase]);
    var CalendarComponent_1;
});
