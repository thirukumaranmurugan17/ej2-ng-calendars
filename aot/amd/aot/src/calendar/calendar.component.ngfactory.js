define(["require", "exports", "@angular/core", "../../../src/calendar/calendar.component", "@angular/forms"], function (require, exports, import0, import1, import2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles_CalendarComponent = [];
    exports.RenderType_CalendarComponent = import0.ɵcrt({
        encapsulation: 2,
        styles: styles_CalendarComponent,
        data: {}
    });
    function View_CalendarComponent_0(l) {
        return import0.ɵvid(2, [], null, null);
    }
    exports.View_CalendarComponent_0 = View_CalendarComponent_0;
    function View_CalendarComponent_Host_0(l) {
        return import0.ɵvid(0, [
            (l()(), import0.ɵeld(0, null, null, 2, 'ej-calendar', [], null, null, null, View_CalendarComponent_0, exports.RenderType_CalendarComponent)),
            import0.ɵdid(3268608, null, 0, import1.CalendarComponent, [import0.ElementRef], null, null),
            import0.ɵprd(2560, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
                return [p0_0];
            }, [import1.CalendarComponent])
        ], function (ck, v) {
            ck(v, 1, 0);
        }, null);
    }
    exports.CalendarComponentNgFactory = import0.ɵccf('ej-calendar', import1.CalendarComponent, View_CalendarComponent_Host_0, {
        depth: 'depth',
        enablePersistence: 'enablePersistence',
        enableRtl: 'enableRtl',
        firstDayOfWeek: 'firstDayOfWeek',
        locale: 'locale',
        max: 'max',
        min: 'min',
        start: 'start',
        value: 'value',
        weekNumber: 'weekNumber'
    }, {
        change: 'change',
        created: 'created',
        destroyed: 'destroyed',
        navigated: 'navigated',
        renderDayCell: 'renderDayCell',
        valueChange: 'valueChange'
    }, []);
});
