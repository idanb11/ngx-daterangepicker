/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import * as momentNs from 'moment';
var /** @type {?} */ moment = momentNs;
var DaterangepickerComponent = /** @class */ (function () {
    function DaterangepickerComponent() {
        this.activeItem = 'Today';
        // Input attributes
        this.opens = 'left';
        this.format = 'MM/DD/YYYY';
        // End of Input attributes
        this.startChange = new EventEmitter();
        this.endChange = new EventEmitter();
        this.open = new EventEmitter();
        this.complete = new EventEmitter();
        this.show = false;
        this.showCalendar = false;
        // this.menuTop = this.el.nativeElement.offsetTop;
        // this.menuLeft = this.el.nativeElement.offsetLeft;
    }
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof this.ranges === 'undefined') {
            this.ranges = [
                {
                    text: 'Today', desc: 'Today', value: 'today',
                    start: moment(),
                    end: moment(),
                    default: true
                },
                {
                    text: 'Yesterday', desc: 'Yesterday', value: 'yesterday',
                    start: moment().subtract(1, 'days'),
                    end: moment().subtract(1, 'days'),
                },
                {
                    text: 'Last 7 Days', desc: 'Last 7 Days', value: 'last7days',
                    start: moment().subtract(6, 'days'),
                    end: moment().subtract(1, 'days')
                },
                {
                    text: 'Last 30 Days', desc: 'Last 30 Days', value: 'last30days',
                    start: moment().subtract(29, 'days'),
                    end: moment()
                },
                {
                    text: 'This Month', desc: 'This Month', value: 'thismonth',
                    start: moment().startOf('month'),
                    end: moment().endOf('month')
                },
                {
                    text: 'Last Month', desc: 'Last Month', value: 'lastmonth',
                    start: moment().subtract(1, 'month').startOf('month'),
                    end: moment().subtract(1, 'month').endOf('month')
                }
            ];
        }
        if (typeof this.pill !== 'boolean') {
            this.pill = false;
        }
        if (typeof this.start === 'string') {
            this.startDate = moment(this.start, this.format);
        }
        if (typeof this.end === 'string') {
            this.endDate = moment(this.end, this.format);
        }
        if (typeof this.start === 'undefined') {
            this.startDate = moment();
        }
        if (typeof this.end === 'undefined') {
            this.startDate = moment();
        }
        if (typeof this.minDate === 'string') {
            this.minDate = moment(this.minDate, this.format);
        }
        if (typeof this.maxDate === 'string') {
            this.maxDate = moment(this.maxDate, this.format);
        }
        if (typeof this.minDate === 'object') {
            this.minDate = moment(this.minDate);
        }
        if (typeof this.maxDate === 'object') {
            this.maxDate = moment(this.maxDate);
        }
        if (!this.outputFormat) {
            if (!this.pill) {
                this.outputFormat = 'YYYY-MM-DD';
            }
            else {
                this.outputFormat = 'MMM D';
            }
        }
    };
    /**
     * @param {?} range
     * @return {?}
     */
    DaterangepickerComponent.prototype.selectRange = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        if (range) {
            this.activeItem = range.text;
            this.startDate = range.start;
            this.endDate = range.end;
            this.renderText(this.startDate, this.endDate);
            this.emitResult();
        }
    };
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.setCurrent = /**
     * @return {?}
     */
    function () {
        if (this.ranges) {
            this.selectRange(this.ranges[0]);
        }
        else {
            // this.start = moment();
            // this.end = moment();
            this.renderText(this.start, this.end);
            this.emitResult();
        }
    };
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.setCurrent();
        }, 0);
    };
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.menuTop = _this.el.nativeElement.offsetTop + 50;
            _this.menuLeft = _this.el.nativeElement.offsetLeft;
            _this.show = !_this.show;
            if (_this.ranges && _this.showCalendar) {
                _this.menuLeft += 556;
                _this.showCalendar = !_this.showCalendar;
            }
            else if (!_this.ranges) {
                _this.showCalendar = true;
            }
        }, 0);
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    DaterangepickerComponent.prototype.renderText = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        var _this = this;
        if (start && end) {
            var /** @type {?} */ period_1 = +end - +start;
            var /** @type {?} */ diff_1 = +moment() - +start;
            setTimeout(function () {
                if (period_1 < 100 && diff_1 < 86400000) {
                    _this.title = 'Today: ';
                    _this.dateStr = start.format(_this.outputFormat);
                }
                else if (period_1 < 100 && diff_1 >= 86400000) {
                    _this.title = 'Yesterday: ';
                    _this.dateStr = start.format(_this.outputFormat);
                }
                else {
                    _this.title = '';
                    _this.dateStr = start.format(_this.outputFormat) + ' - ' + end.format(_this.outputFormat);
                }
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.triggerCalendar = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeItem = 'Custom Range';
        setTimeout(function () {
            if (_this.showCalendar && _this.opens === 'left') {
                _this.menuLeft += 556;
            }
            else if (_this.opens === 'left') {
                _this.menuLeft -= 556;
            }
            _this.showCalendar = !_this.showCalendar;
        }, 0);
    };
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.apply = /**
     * @return {?}
     */
    function () {
        this.trigger = !this.trigger;
        this.toggleMenu();
    };
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.show = false;
        }, 0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DaterangepickerComponent.prototype.detected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.startDate = event.start;
        this.endDate = event.end;
        this.emitResult();
        this.renderText(this.startDate, this.endDate);
        this.closeMenu();
        // console.log(event);
    };
    /**
     * @return {?}
     */
    DaterangepickerComponent.prototype.emitResult = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            // Return value
            if (_this.startDate && _this.endDate) {
                _this.start = _this.startDate;
                _this.end = _this.endDate;
                _this.startChange.emit(_this.start.format(_this.outputFormat)); // this is to calendar
                _this.endChange.emit(_this.end.format(_this.outputFormat)); // this is to calendar
                _this.complete.emit({ start: _this.start.format(_this.outputFormat), end: _this.end.format(_this.outputFormat) });
            }
        }, 0);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DaterangepickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // console.log(changes);
    };
    DaterangepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-daterangepicker',
                    template: "<input type=\"email\" class=\"form-control m-input m-input--square\" (focus)='toggleMenu()' *ngIf='!pill' #pickerElement value=\"{{dateStr}}\">\n<span class=\"daterange\" (click)=\"toggleMenu()\" *ngIf='pill' #pickerElement>\n  <span class=\"daterange-label\">\n    <span class=\"daterange-title\">{{title}}</span>\n    <span class=\"daterange-date main-color\">&nbsp; {{dateStr}}</span>\n  </span>\n  <a class=\"n-btn n-btn-sm n-btn-icon n-btn-icon-only n-btn-pill n-btn-main-color\">\n    <i class=\"la la-angle-down\"></i>\n  </a>\n</span>\n\n<div class=\"daterangepicker dropdown-menu ltr opensleft show-calendar\" [ngStyle]=\"{ 'display': show? 'flex': 'none', 'top': menuTop+'px', 'left': menuLeft+'px', 'right': 'auto' }\">\n  <lib-calendar [start]=\"startDate\" [end]=\"endDate\" [ngStyle]=\"{'display': showCalendar?'block':'none'}\" \n    [triggered]=\"trigger\" (apply)='detected($event)' (cancel)='closeMenu()' #cEl *ngIf=\"opens==='left'\" [ranges]=\"ranges\"></lib-calendar>\n  <div class=\"ranges\" *ngIf=\"ranges\">\n    <ul>\n      <li *ngFor='let range of ranges' [ngClass]=\"{ 'active': activeItem === range.text }\" (click)='selectRange(range); toggleMenu()'>{{range.text}}</li>\n      <li (click)='triggerCalendar()' [ngClass]=\"{ 'active': activeItem === 'Custom Range'}\">Custom Range</li>\n    </ul>\n    <div class=\"range_inputs\">\n      <button class=\"applyBtn n-btn n-btn-sm n-btn-success\" type=\"button\" (click)=\"apply()\">Apply</button> \n      <button class=\"cancelBtn n-btn n-btn-sm n-btn-default\" type=\"button\" (click)=\"toggleMenu()\">Cancel</button>\n    </div>\n  </div>\n  <lib-calendar [start]=\"startDate\" [end]=\"endDate\" [ngStyle]=\"{'display': showCalendar?'block':'none'}\" \n    [triggered]=\"trigger\" (apply)='detected($event)' (cancel)='closeMenu()' #cEl *ngIf=\"opens==='right'\" [ranges]=\"ranges\"></lib-calendar>\n</div> ",
                },] },
    ];
    /** @nocollapse */
    DaterangepickerComponent.ctorParameters = function () { return []; };
    DaterangepickerComponent.propDecorators = {
        opens: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }],
        outputFormat: [{ type: Input }],
        format: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }],
        pill: [{ type: Input }],
        ranges: [{ type: Input }],
        startChange: [{ type: Output }],
        endChange: [{ type: Output }],
        open: [{ type: Output }],
        complete: [{ type: Output }],
        cEl: [{ type: ViewChild, args: ['cEl',] }],
        el: [{ type: ViewChild, args: ['pickerElement',] }]
    };
    return DaterangepickerComponent;
}());
export { DaterangepickerComponent };
function DaterangepickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DaterangepickerComponent.prototype.show;
    /** @type {?} */
    DaterangepickerComponent.prototype.menuTop;
    /** @type {?} */
    DaterangepickerComponent.prototype.menuLeft;
    /** @type {?} */
    DaterangepickerComponent.prototype.dateStr;
    /** @type {?} */
    DaterangepickerComponent.prototype.title;
    /** @type {?} */
    DaterangepickerComponent.prototype.activeItem;
    /** @type {?} */
    DaterangepickerComponent.prototype.showCalendar;
    /** @type {?} */
    DaterangepickerComponent.prototype.trigger;
    /** @type {?} */
    DaterangepickerComponent.prototype.startDate;
    /** @type {?} */
    DaterangepickerComponent.prototype.endDate;
    /** @type {?} */
    DaterangepickerComponent.prototype.opens;
    /** @type {?} */
    DaterangepickerComponent.prototype.start;
    /** @type {?} */
    DaterangepickerComponent.prototype.end;
    /** @type {?} */
    DaterangepickerComponent.prototype.outputFormat;
    /** @type {?} */
    DaterangepickerComponent.prototype.format;
    /** @type {?} */
    DaterangepickerComponent.prototype.minDate;
    /** @type {?} */
    DaterangepickerComponent.prototype.maxDate;
    /** @type {?} */
    DaterangepickerComponent.prototype.pill;
    /** @type {?} */
    DaterangepickerComponent.prototype.ranges;
    /** @type {?} */
    DaterangepickerComponent.prototype.startChange;
    /** @type {?} */
    DaterangepickerComponent.prototype.endChange;
    /** @type {?} */
    DaterangepickerComponent.prototype.open;
    /** @type {?} */
    DaterangepickerComponent.prototype.complete;
    /** @type {?} */
    DaterangepickerComponent.prototype.cEl;
    /** @type {?} */
    DaterangepickerComponent.prototype.el;
}
