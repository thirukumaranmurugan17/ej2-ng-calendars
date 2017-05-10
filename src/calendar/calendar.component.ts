import { Component, ElementRef, ValueProvider, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { getValue } from '@syncfusion/ej2-base/util';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, FormBase } from '@syncfusion/ej2-ng-base';
import { Calendar } from '@syncfusion/ej2-calendars';


export const inputs: string[] = ['depth','enablePersistence','enableRtl','firstDayOfWeek','locale','max','min','start','value','weekNumber'];
export const outputs: string[] = ['change','created','destroyed','navigated','renderDayCell','valueChange'];
export const twoWays: string[] = ['value'];

/**
 * Represents the Essential JS 2 Angular Calendar Component.
 * ```html
 * <ej-calendar [value]='date'></ej-calendar>
 * ```
 */
@Component({
    selector: 'ej-calendar',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CalendarComponent),
            multi: true
        }
    ],
    queries: {

    }
})
export class CalendarComponent extends Calendar implements IComponentBase {


    public valueChange: any;
    constructor(private ngEle: ElementRef) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        for (let i: number = 1; i < arguments.length; i++) {
            let injectedObj: Object = arguments[i];
            if (injectedObj) {
                this.injectedModules.push(<Function>injectedObj);
            }
        }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
    }

    public registerOnChange(registerFunction: (_: any) => void): void {
    }

    public registerOnTouched(registerFunction: () => void): void {
    }

    public writeValue(value: any): void {
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

applyMixins(CalendarComponent, [FormBase, ComponentBase]);

