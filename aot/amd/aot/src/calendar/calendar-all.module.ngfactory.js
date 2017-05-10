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
define(["require", "exports", "@angular/core", "../../../src/calendar/calendar-all.module", "@angular/common", "../../../src/calendar/calendar.module"], function (require, exports, import0, import1, import2, import3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CalendarAllModuleInjector = (function (_super) {
        __extends(CalendarAllModuleInjector, _super);
        function CalendarAllModuleInjector(parent) {
            return _super.call(this, parent, [], []) || this;
        }
        Object.defineProperty(CalendarAllModuleInjector.prototype, "_NgLocalization_3", {
            get: function () {
                if ((this.__NgLocalization_3 == null)) {
                    (this.__NgLocalization_3 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
                }
                return this.__NgLocalization_3;
            },
            enumerable: true,
            configurable: true
        });
        CalendarAllModuleInjector.prototype.createInternal = function () {
            this._CommonModule_0 = new import2.CommonModule();
            this._CalendarModule_1 = new import3.CalendarModule();
            this._CalendarAllModule_2 = new import1.CalendarAllModule();
            return this._CalendarAllModule_2;
        };
        CalendarAllModuleInjector.prototype.getInternal = function (token, notFoundResult) {
            if ((token === import2.CommonModule)) {
                return this._CommonModule_0;
            }
            if ((token === import3.CalendarModule)) {
                return this._CalendarModule_1;
            }
            if ((token === import1.CalendarAllModule)) {
                return this._CalendarAllModule_2;
            }
            if ((token === import2.NgLocalization)) {
                return this._NgLocalization_3;
            }
            return notFoundResult;
        };
        CalendarAllModuleInjector.prototype.destroyInternal = function () {
        };
        return CalendarAllModuleInjector;
    }(import0.ɵNgModuleInjector));
    exports.CalendarAllModuleNgFactory = new import0.NgModuleFactory(CalendarAllModuleInjector, import1.CalendarAllModule);
});
