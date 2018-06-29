import { Component, ViewChild, EventEmitter, Input, Output, NgModule } from '@angular/core';
import * as momentNs from 'moment';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ moment$1 = momentNs;
var Matrix = /** @class */ (function () {
    function Matrix() {
        this.today = false;
        this.off = false;
        this.available = false;
        this.active = false;
        this.inRange = false;
        this.startDate = false;
        this.endDate = false;
        this.weekend = false;
        this.disabled = false;
    }
    return Matrix;
}());
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.calendarForView = [];
        this.matrix = [];
        for (var /** @type {?} */ row = 0; row < 6; row++) {
            this.calendarForView[row] = [];
            this.matrix[row] = [];
            for (var /** @type {?} */ col = 0; col < 7; col++) {
                this.calendarForView[row][col] = moment$1();
                this.matrix[row][col] = new Matrix();
            }
        }
    }
    return Calendar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ moment$2 = momentNs;
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.apply = new EventEmitter();
        this.cancel = new EventEmitter();
        this.selecting = false;
        this.leftCalendar = new Calendar();
        this.rightCalendar = new Calendar();
        // console.log(this.leftCalendar.calendarForView);
        this.locale = {
            direction: 'ltr',
            format: moment$2.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment$2.weekdaysMin(),
            monthNames: moment$2.monthsShort(),
            firstDay: moment$2.localeData().firstDayOfWeek()
        };
    }
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.initCalendar = /**
     * @return {?}
     */
    function () {
        this.leftCalendar = new Calendar();
        this.rightCalendar = new Calendar();
    };
    /**
     * @param {?} side
     * @return {?}
     */
    CalendarComponent.prototype.clearCalendarFlags = /**
     * @param {?} side
     * @return {?}
     */
    function (side) {
        var /** @type {?} */ calendar = side === 'left' ? this.leftCalendar : this.rightCalendar;
        for (var /** @type {?} */ row = 0; row < 6; row++) {
            for (var /** @type {?} */ col = 0; col < 7; col++) {
                calendar.matrix[row][col] = new Matrix();
            }
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updateMonth = /**
     * @return {?}
     */
    function () {
        if (this.start && this.end) {
            this.initCalendar();
            if (this.end.month() !== this.start.month() || this.end.year() !== this.start.year()) {
                // this.rightCalendar.month = this.end.clone().date(2);
                this.rightCalendar.month = this.start.clone().date(2).add(1, 'month');
            }
            else {
                this.rightCalendar.month = this.start.clone().date(2).add(1, 'month');
            }
            this.leftCalendar.month = this.start.clone().date(2);
            this.renderCalendar('left');
            this.renderCalendar('right');
        }
    };
    /**
     * @param {?} m
     * @return {?}
     */
    CalendarComponent.prototype.clickDate = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        if (!this.selecting) {
            this.setStart(m);
            this.setEnd(m);
        }
        this.selecting = !this.selecting;
    };
    /**
     * @param {?} m
     * @return {?}
     */
    CalendarComponent.prototype.hoverDate = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        if (!this.selecting) {
            this.tempStart = m;
            this.startStr = this.tempStart.format('MM/DD/YYYY');
        }
        else {
            if (m > this._start) {
                this.setEnd(m);
            }
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.hoverOut = /**
     * @return {?}
     */
    function () {
        this.startStr = this._start.format('MM/DD/YYYY');
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.clickPrev = /**
     * @return {?}
     */
    function () {
        this.leftCalendar.month.subtract(1, 'month');
        this.rightCalendar.month.subtract(1, 'month');
        this.clearCalendarFlags('left');
        this.clearCalendarFlags('right');
        this.renderCalendar('left');
        this.renderCalendar('right');
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.clickNext = /**
     * @return {?}
     */
    function () {
        this.leftCalendar.month.add(1, 'month');
        this.rightCalendar.month.add(1, 'month');
        this.clearCalendarFlags('left');
        this.clearCalendarFlags('right');
        this.renderCalendar('left');
        this.renderCalendar('right');
    };
    /**
     * @param {?} side
     * @return {?}
     */
    CalendarComponent.prototype.renderCalendar = /**
     * @param {?} side
     * @return {?}
     */
    function (side) {
        var /** @type {?} */ calendar = side === 'left' ? this.leftCalendar : this.rightCalendar;
        var /** @type {?} */ month = calendar.month.month();
        var /** @type {?} */ year = calendar.month.year();
        var /** @type {?} */ hour = calendar.month.hour();
        var /** @type {?} */ minute = calendar.month.minute();
        var /** @type {?} */ second = calendar.month.second();
        var /** @type {?} */ daysInMonth = moment$2([year, month]).daysInMonth();
        var /** @type {?} */ firstDay = moment$2([year, month, 1]);
        var /** @type {?} */ lastDay = moment$2([year, month, daysInMonth]);
        var /** @type {?} */ lastMonth = moment$2(firstDay).subtract(1, 'month').month();
        var /** @type {?} */ lastYear = moment$2(firstDay).subtract(1, 'month').year();
        var /** @type {?} */ daysInLastMonth = moment$2([lastYear, lastMonth]).daysInMonth();
        var /** @type {?} */ dayOfWeek = firstDay.day();
        calendar.calendarForView = [];
        calendar.calendarForView['firstDay'] = firstDay;
        calendar.calendarForView['lastDay'] = lastDay;
        for (var /** @type {?} */ i = 0; i < 6; i++) {
            calendar.calendarForView[i] = [];
        }
        // console.log(calendar.calendarForView);
        // populate the calendar with date objects
        var /** @type {?} */ startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
        if (startDay > daysInLastMonth) {
            startDay -= 7;
        }
        if (dayOfWeek === this.locale.firstDay) {
            startDay = daysInLastMonth - 6;
        }
        var /** @type {?} */ curDate = moment$2([lastYear, lastMonth, startDay, 12, minute, second]);
        // console.log('current date');
        // console.log(curDate);
        var /** @type {?} */ col = 0, /** @type {?} */ row = 0;
        for (var /** @type {?} */ i = 0; i < 42; i++, col++, curDate = moment$2(curDate).add(24, 'hour')) {
            if (i > 0 && col % 7 === 0) {
                col = 0;
                row++;
            }
            // console.log('set row: ' + row + ', col: ' + col);
            calendar.calendarForView[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
            // console.log(calendar.calendarForView[row][col].date());
            curDate.hour(12);
            // if (this.minDate &&
            //     calendar[row][col].format('YYYY-MM-DD') === this.minDate.format('YYYY-MM-DD') &&
            //     calendar[row][col].isBefore(this.minDate) && side == 'left') {
            //     calendar[row][col] = this.minDate.clone();
            // }
            // if (this.maxDate &&
            //      calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') &&
            //      calendar[row][col].isAfter(this.maxDate) && side == 'right') {
            //     calendar[row][col] = this.maxDate.clone();
            // }
        }
        for (var /** @type {?} */ i = 0; i < 6; i++) {
            for (var /** @type {?} */ j = 0; j < 7; j++) {
                if (calendar.calendarForView[i][j].isSame(new Date(), 'day')) {
                    calendar.matrix[i][j].today = true;
                }
                if (row >= 1 && (calendar.calendarForView[i][j].month() !== calendar.calendarForView[1][1].month())) {
                    calendar.matrix[i][j].off = true;
                }
                if (calendar.calendarForView[i][j].format('YYYY-MM-DD') === this.start.format('YYYY-MM-DD')) {
                    calendar.matrix[i][j].active = true;
                    calendar.matrix[i][j].startDate = true;
                }
                // highlight the currently selected end date
                if (this.end != null && calendar.calendarForView[i][j].format('YYYY-MM-DD') === this.end.format('YYYY-MM-DD')) {
                    calendar.matrix[i][j].active = true;
                    calendar.matrix[i][j].endDate = true;
                }
                // highlight dates in-between the selected dates
                if (this.end != null && calendar.calendarForView[i][j] > this.start &&
                    calendar.calendarForView[i][j] < this.end) {
                    // console.log('This is in range: ' + calendar.calendarForView[i][j].format('MM/DD/YYYY'));
                    calendar.matrix[i][j].inRange = true;
                }
                if (!calendar.matrix[i][j].disabled) {
                    calendar.matrix[i][j].available = true;
                }
                if (calendar.calendarForView[i][j].isoWeekday() > 5) {
                    calendar.matrix[i][j].weekend = true;
                }
            }
        }
        calendar.dateHtml = this.locale.monthNames[calendar.calendarForView[1][1].month()] + calendar.calendarForView[1][1].format(' YYYY');
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onApply = /**
     * @return {?}
     */
    function () {
        this.apply.emit({ start: this._start, end: this._end });
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancel.emit();
    };
    Object.defineProperty(CalendarComponent.prototype, "start", {
        get: /**
         * @return {?}
         */
        function () {
            return this._start;
        },
        set: /**
         * @param {?} start
         * @return {?}
         */
        function (start) {
            this.setStart(start);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} start
     * @return {?}
     */
    CalendarComponent.prototype.setStart = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var _this = this;
        this._start = start;
        console.log('calendar start');
        console.log(start);
        if (start) {
            this.startStr = start.format('MM/DD/YYYY');
        }
        setTimeout(function () {
            _this.updateMonth();
        }, 100);
    };
    Object.defineProperty(CalendarComponent.prototype, "end", {
        get: /**
         * @return {?}
         */
        function () {
            return this._end;
        },
        set: /**
         * @param {?} end
         * @return {?}
         */
        function (end) {
            this.setEnd(end);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} end
     * @return {?}
     */
    CalendarComponent.prototype.setEnd = /**
     * @param {?} end
     * @return {?}
     */
    function (end) {
        var _this = this;
        this._end = end;
        if (end) {
            this.endStr = end.format('MM/DD/YYYY');
        }
        setTimeout(function () {
            _this.updateMonth();
        }, 100);
    };
    Object.defineProperty(CalendarComponent.prototype, "triggered", {
        get: /**
         * @return {?}
         */
        function () {
            return this._triggered;
        },
        set: /**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            this.apply.emit({ start: this._start, end: this._end });
            this._triggered = trigger;
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-calendar',
                    template: "<div>\n  <div class=\"calendar left\" (mouseleave)=\"hoverOut();\">\n    <div class=\"daterangepicker_input\">\n      <input class=\"input-mini form-control active\" type=\"text\" name=\"daterangepicker_start\" [value]=\"startStr\">\n      <i class=\"la la-calendar glyphicon glyphicon-calendar\"></i><div class=\"calendar-time\" style=\"display: block;\">\n        <div></div>\n        <i class=\"fa fa-clock-o glyphicon glyphicon-time\"></i>\n      </div>\n    </div>\n    <div class=\"calendar-table\">\n      <table class=\"table-condensed\">\n        <thead>\n          <tr>\n            <th class=\"prev available\" (click)=\"clickPrev();\">\n              <i class=\"la la-angle-left\"></i>\n            </th><th colspan=\"5\" class=\"month\">{{leftCalendar.dateHtml}}</th>\n            <th>\n            </th>\n          </tr>\n          <tr>\n            <th *ngFor='let day of locale.daysOfWeek'>{{day}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" data-title=\"{{'r'+row+'c'+col}}\"\n              [ngClass]=\"{'today': leftCalendar.matrix[row][col].today, 'off': leftCalendar.matrix[row][col].off, 'active': leftCalendar.matrix[row][col].active, 'start-date': leftCalendar.matrix[row][col].startDate, 'end-date': leftCalendar.matrix[row][col].endDate, 'in-range': leftCalendar.matrix[row][col].inRange, 'available': leftCalendar.matrix[row][col].available, 'weekend': leftCalendar.matrix[row][col].weekend  }\"\n              (click)=\"clickDate(leftCalendar.calendarForView[row][col])\"\n              (mouseover)=\"hoverDate(leftCalendar.calendarForView[row][col])\">\n              {{ leftCalendar.calendarForView[row][col].date() }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"calendar right\" (mouseleave)=\"hoverOut();\">\n    <div class=\"daterangepicker_input\">\n      <input class=\"input-mini form-control\" type=\"text\" name=\"daterangepicker_end\" [value]=\"endStr\">\n      <i class=\"la la-calendar\"></i>\n      <div class=\"calendar-time\" style=\"display: none;\">\n        <div></div>\n        <i class=\"fa fa-clock-o glyphicon glyphicon-time\"></i>\n      </div>\n    </div>\n    <div class=\"calendar-table\">\n      <table class=\"table-condensed\">\n        <thead>\n          <tr>\n            <th></th>\n            <th colspan=\"5\" class=\"month\">{{rightCalendar.dateHtml}}</th>\n            <th class=\"next available\" (click)=\"clickNext()\">\n              <i class=\"la la-angle-right\"></i>\n            </th>\n          </tr>\n          <tr>\n            <th *ngFor='let day of locale.daysOfWeek'>{{day}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" data-title=\"{{'r'+row+'c'+col}}\"\n                [ngClass]=\"{'today': rightCalendar.matrix[row][col].today, 'off': rightCalendar.matrix[row][col].off, 'active': rightCalendar.matrix[row][col].active, 'start-date': rightCalendar.matrix[row][col].startDate, 'end-date': rightCalendar.matrix[row][col].endDate, 'in-range': rightCalendar.matrix[row][col].inRange, 'available': rightCalendar.matrix[row][col].available, 'weekend': rightCalendar.matrix[row][col].weekend  }\"\n                (click)=\"clickDate(rightCalendar.calendarForView[row][col])\"\n                (mouseover)=\"hoverDate(rightCalendar.calendarForView[row][col])\">\n              {{ rightCalendar.calendarForView[row][col].date() }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class='buttons-field' *ngIf=\"!ranges\">\n    <button class=\"applyBtn n-btn n-btn-sm n-btn-success\" type=\"button\" (click)='onApply()'>Apply</button> \n    <button class=\"cancelBtn n-btn n-btn-sm n-btn-default\" type=\"button\" (click)='onCancel()'>Cancel</button>\n  </div>\n</div>",
                    styles: ["/*!\n *  Line Awesome 1.1.0 by @icons_8 - https://icons8.com/line-awesome\n *  License - https://icons8.com/good-boy-license/ (Font: SIL OFL 1.1, CSS: MIT License)\n *\n * Made with love by Icons8 [ https://icons8.com/ ] using FontCustom [ https://github.com/FontCustom/fontcustom ]\n *\n * Contacts:\n *    [ https://icons8.com/contact ]\n *\n * Follow Icon8 on\n *    Twitter [ https://twitter.com/icons_8 ]\n *    Facebook [ https://www.facebook.com/Icons8 ]\n *    Google+ [ https://plus.google.com/+Icons8 ]\n *    GitHub [ https://github.com/icons8 ]\n */.la{display:inline-block;font:1rem/1 LineAwesome;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}.la-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.la-2x{font-size:2em}.la-3x{font-size:3em}.la-4x{font-size:4em}.la-5x{font-size:5em}.la-fw{width:1.28571429em;text-align:center}.la-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.la-ul>li{position:relative}.la-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.la-li.la-lg{left:-1.85714286em}.la-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.pull-right{float:right}.pull-left{float:left}.li.pull-left{margin-right:.3em}.li.pull-right{margin-left:.3em}.la-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.la-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.la-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.la-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.la-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.la-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .la-flip-horizontal,:root .la-flip-vertical,:root .la-rotate-180,:root .la-rotate-270,:root .la-rotate-90{-webkit-filter:none;filter:none}.la-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.la-stack-1x,.la-stack-2x{position:absolute;left:0;width:100%;text-align:center}.la-stack-1x{line-height:inherit}.la-stack-2x{font-size:2em}.la-inverse{color:#fff}.la-500px:before{content:\"\\f100\"}.la-adjust:before{content:\"\\f101\"}.la-adn:before{content:\"\\f102\"}.la-align-center:before{content:\"\\f103\"}.la-align-justify:before{content:\"\\f104\"}.la-align-left:before{content:\"\\f105\"}.la-align-right:before{content:\"\\f106\"}.la-amazon:before{content:\"\\f107\"}.la-ambulance:before{content:\"\\f108\"}.la-anchor:before{content:\"\\f109\"}.la-android:before{content:\"\\f10a\"}.la-angellist:before{content:\"\\f10b\"}.la-angle-double-down:before{content:\"\\f10c\"}.la-angle-double-left:before{content:\"\\f10d\"}.la-angle-double-right:before{content:\"\\f10e\"}.la-angle-double-up:before{content:\"\\f10f\"}.la-angle-down:before{content:\"\\f110\"}.la-angle-left:before{content:\"\\f111\"}.la-angle-right:before{content:\"\\f112\"}.la-angle-up:before{content:\"\\f113\"}.la-apple:before{content:\"\\f114\"}.la-archive:before{content:\"\\f115\"}.la-area-chart:before{content:\"\\f116\"}.la-arrow-circle-down:before{content:\"\\f117\"}.la-arrow-circle-left:before{content:\"\\f118\"}.la-arrow-circle-o-down:before{content:\"\\f119\"}.la-arrow-circle-o-left:before{content:\"\\f11a\"}.la-arrow-circle-o-right:before{content:\"\\f11b\"}.la-arrow-circle-o-up:before{content:\"\\f11c\"}.la-arrow-circle-right:before{content:\"\\f11d\"}.la-arrow-circle-up:before{content:\"\\f11e\"}.la-arrow-down:before{content:\"\\f11f\"}.la-arrow-left:before{content:\"\\f120\"}.la-arrow-right:before{content:\"\\f121\"}.la-arrow-up:before{content:\"\\f122\"}.la-arrows:before{content:\"\\f123\"}.la-arrows-alt:before{content:\"\\f124\"}.la-arrows-h:before{content:\"\\f125\"}.la-arrows-v:before{content:\"\\f126\"}.la-asterisk:before{content:\"\\f127\"}.la-at:before{content:\"\\f128\"}.la-automobile:before{content:\"\\f129\"}.la-backward:before{content:\"\\f12a\"}.la-balance-scale:before{content:\"\\f12b\"}.la-ban:before{content:\"\\f12c\"}.la-bank:before{content:\"\\f12d\"}.la-bar-chart:before{content:\"\\f12e\"}.la-bar-chart-o:before{content:\"\\f12f\"}.la-barcode:before{content:\"\\f130\"}.la-bars:before{content:\"\\f131\"}.la-battery-0:before{content:\"\\f132\"}.la-battery-1:before{content:\"\\f133\"}.la-battery-2:before{content:\"\\f134\"}.la-battery-3:before{content:\"\\f135\"}.la-battery-4:before{content:\"\\f136\"}.la-battery-empty:before{content:\"\\f137\"}.la-battery-full:before{content:\"\\f138\"}.la-battery-half:before{content:\"\\f139\"}.la-battery-quarter:before{content:\"\\f13a\"}.la-battery-three-quarters:before{content:\"\\f13b\"}.la-bed:before{content:\"\\f13c\"}.la-beer:before{content:\"\\f13d\"}.la-behance:before{content:\"\\f13e\"}.la-behance-square:before{content:\"\\f13f\"}.la-bell:before{content:\"\\f140\"}.la-bell-o:before{content:\"\\f141\"}.la-bell-slash:before{content:\"\\f142\"}.la-bell-slash-o:before{content:\"\\f143\"}.la-bicycle:before{content:\"\\f144\"}.la-binoculars:before{content:\"\\f145\"}.la-birthday-cake:before{content:\"\\f146\"}.la-bitbucket:before{content:\"\\f147\"}.la-bitbucket-square:before{content:\"\\f148\"}.la-bitcoin:before{content:\"\\f149\"}.la-black-tie:before{content:\"\\f14a\"}.la-bold:before{content:\"\\f14b\"}.la-bolt:before{content:\"\\f14c\"}.la-bomb:before{content:\"\\f14d\"}.la-book:before{content:\"\\f14e\"}.la-bookmark:before{content:\"\\f14f\"}.la-bookmark-o:before{content:\"\\f150\"}.la-briefcase:before{content:\"\\f151\"}.la-btc:before{content:\"\\f152\"}.la-bug:before{content:\"\\f153\"}.la-building:before{content:\"\\f154\"}.la-building-o:before{content:\"\\f155\"}.la-bullhorn:before{content:\"\\f156\"}.la-bullseye:before{content:\"\\f157\"}.la-bus:before{content:\"\\f158\"}.la-buysellads:before{content:\"\\f159\"}.la-cab:before{content:\"\\f15a\"}.la-calculator:before{content:\"\\f15b\"}.la-calendar:before{content:\"\\f15c\"}.la-calendar-check-o:before{content:\"\\f15d\"}.la-calendar-minus-o:before{content:\"\\f15e\"}.la-calendar-o:before{content:\"\\f15f\"}.la-calendar-plus-o:before{content:\"\\f160\"}.la-calendar-times-o:before{content:\"\\f161\"}.la-camera:before{content:\"\\f162\"}.la-camera-retro:before{content:\"\\f163\"}.la-car:before{content:\"\\f164\"}.la-caret-down:before{content:\"\\f165\"}.la-caret-left:before{content:\"\\f166\"}.la-caret-right:before{content:\"\\f167\"}.la-caret-square-o-down:before,.la-toggle-down:before{content:\"\\f168\"}.la-caret-square-o-left:before,.la-toggle-left:before{content:\"\\f169\"}.la-caret-square-o-right:before,.la-toggle-right:before{content:\"\\f16a\"}.la-caret-square-o-up:before,.la-toggle-up:before{content:\"\\f16b\"}.la-caret-up:before{content:\"\\f16c\"}.la-cart-arrow-down:before{content:\"\\f16d\"}.la-cart-plus:before{content:\"\\f16e\"}.la-cc:before{content:\"\\f16f\"}.la-cc-amex:before{content:\"\\f170\"}.la-cc-diners-club:before{content:\"\\f171\"}.la-cc-discover:before{content:\"\\f172\"}.la-cc-jcb:before{content:\"\\f173\"}.la-cc-mastercard:before{content:\"\\f174\"}.la-cc-paypal:before{content:\"\\f175\"}.la-cc-stripe:before{content:\"\\f176\"}.la-cc-visa:before{content:\"\\f177\"}.la-certificate:before{content:\"\\f178\"}.la-chain:before{content:\"\\f179\"}.la-chain-broken:before{content:\"\\f17a\"}.la-check:before{content:\"\\f17b\"}.la-check-circle:before{content:\"\\f17c\"}.la-check-circle-o:before{content:\"\\f17d\"}.la-check-square:before{content:\"\\f17e\"}.la-check-square-o:before{content:\"\\f17f\"}.la-chevron-circle-down:before{content:\"\\f180\"}.la-chevron-circle-left:before{content:\"\\f181\"}.la-chevron-circle-right:before{content:\"\\f182\"}.la-chevron-circle-up:before{content:\"\\f183\"}.la-chevron-down:before{content:\"\\f184\"}.la-chevron-left:before{content:\"\\f185\"}.la-chevron-right:before{content:\"\\f186\"}.la-chevron-up:before{content:\"\\f187\"}.la-child:before{content:\"\\f188\"}.la-chrome:before{content:\"\\f189\"}.la-circle:before{content:\"\\f18a\"}.la-circle-o:before{content:\"\\f18b\"}.la-circle-o-notch:before{content:\"\\f18c\"}.la-circle-thin:before{content:\"\\f18d\"}.la-clipboard:before{content:\"\\f18e\"}.la-clock-o:before{content:\"\\f18f\"}.la-clone:before{content:\"\\f190\"}.la-close:before{content:\"\\f191\"}.la-cloud:before{content:\"\\f192\"}.la-cloud-download:before{content:\"\\f193\"}.la-cloud-upload:before{content:\"\\f194\"}.la-cny:before{content:\"\\f195\"}.la-code:before{content:\"\\f196\"}.la-code-fork:before{content:\"\\f197\"}.la-codepen:before{content:\"\\f198\"}.la-coffee:before{content:\"\\f199\"}.la-cog:before{content:\"\\f19a\"}.la-cogs:before{content:\"\\f19b\"}.la-columns:before{content:\"\\f19c\"}.la-comment:before{content:\"\\f19d\"}.la-comment-o:before{content:\"\\f19e\"}.la-commenting:before{content:\"\\f19f\"}.la-commenting-o:before{content:\"\\f1a0\"}.la-comments:before{content:\"\\f1a1\"}.la-comments-o:before{content:\"\\f1a2\"}.la-compass:before{content:\"\\f1a3\"}.la-compress:before{content:\"\\f1a4\"}.la-connectdevelop:before{content:\"\\f1a5\"}.la-contao:before{content:\"\\f1a6\"}.la-copy:before{content:\"\\f1a7\"}.la-copyright:before{content:\"\\f1a8\"}.la-creative-commons:before{content:\"\\f1a9\"}.la-credit-card:before{content:\"\\f1aa\"}.la-crop:before{content:\"\\f1ab\"}.la-crosshairs:before{content:\"\\f1ac\"}.la-css3:before{content:\"\\f1ad\"}.la-cube:before{content:\"\\f1ae\"}.la-cubes:before{content:\"\\f1af\"}.la-cut:before{content:\"\\f1b0\"}.la-cutlery:before{content:\"\\f1b1\"}.la-dashboard:before{content:\"\\f1b2\"}.la-dashcube:before{content:\"\\f1b3\"}.la-database:before{content:\"\\f1b4\"}.la-dedent:before{content:\"\\f1b5\"}.la-delicious:before{content:\"\\f1b6\"}.la-desktop:before{content:\"\\f1b7\"}.la-deviantart:before{content:\"\\f1b8\"}.la-diamond:before{content:\"\\f1b9\"}.la-digg:before{content:\"\\f1ba\"}.la-dollar:before{content:\"\\f1bb\"}.la-dot-circle-o:before{content:\"\\f1bc\"}.la-download:before{content:\"\\f1bd\"}.la-dribbble:before{content:\"\\f1be\"}.la-dropbox:before{content:\"\\f1bf\"}.la-drupal:before{content:\"\\f1c0\"}.la-edit:before{content:\"\\f1c1\"}.la-eject:before{content:\"\\f1c2\"}.la-ellipsis-h:before{content:\"\\f1c3\"}.la-ellipsis-v:before{content:\"\\f1c4\"}.la-empire:before,.la-ge:before{content:\"\\f1c5\"}.la-envelope:before{content:\"\\f1c6\"}.la-envelope-o:before{content:\"\\f1c7\"}.la-envelope-square:before{content:\"\\f1c8\"}.la-eraser:before{content:\"\\f1c9\"}.la-eur:before{content:\"\\f1ca\"}.la-euro:before{content:\"\\f1cb\"}.la-exchange:before{content:\"\\f1cc\"}.la-exclamation:before{content:\"\\f1cd\"}.la-exclamation-circle:before{content:\"\\f1ce\"}.la-exclamation-triangle:before{content:\"\\f1cf\"}.la-expand:before{content:\"\\f1d0\"}.la-expeditedssl:before{content:\"\\f1d1\"}.la-external-link:before{content:\"\\f1d2\"}.la-external-link-square:before{content:\"\\f1d3\"}.la-eye:before{content:\"\\f1d4\"}.la-eye-slash:before{content:\"\\f1d5\"}.la-eyedropper:before{content:\"\\f1d6\"}.la-facebook-f:before,.la-facebook:before{content:\"\\f1d7\"}.la-facebook-official:before{content:\"\\f1d8\"}.la-facebook-square:before{content:\"\\f1d9\"}.la-fast-backward:before{content:\"\\f1da\"}.la-fast-forward:before{content:\"\\f1db\"}.la-fax:before{content:\"\\f1dc\"}.la-female:before{content:\"\\f1dd\"}.la-fighter-jet:before{content:\"\\f1de\"}.la-file:before{content:\"\\f1df\"}.la-file-archive-o:before{content:\"\\f1e0\"}.la-file-audio-o:before{content:\"\\f1e1\"}.la-file-code-o:before{content:\"\\f1e2\"}.la-file-excel-o:before{content:\"\\f1e3\"}.la-file-image-o:before{content:\"\\f1e4\"}.la-file-movie-o:before{content:\"\\f1e5\"}.la-file-o:before{content:\"\\f1e6\"}.la-file-pdf-o:before{content:\"\\f1e7\"}.la-file-photo-o:before{content:\"\\f1e8\"}.la-file-picture-o:before{content:\"\\f1e9\"}.la-file-powerpoint-o:before{content:\"\\f1ea\"}.la-file-sound-o:before{content:\"\\f1eb\"}.la-file-text:before{content:\"\\f1ec\"}.la-file-text-o:before{content:\"\\f1ed\"}.la-file-video-o:before{content:\"\\f1ee\"}.la-file-word-o:before{content:\"\\f1ef\"}.la-file-zip-o:before{content:\"\\f1f0\"}.la-files-o:before{content:\"\\f1f1\"}.la-film:before{content:\"\\f1f2\"}.la-filter:before{content:\"\\f1f3\"}.la-fire:before{content:\"\\f1f4\"}.la-fire-extinguisher:before{content:\"\\f1f5\"}.la-firefox:before{content:\"\\f1f6\"}.la-flag:before{content:\"\\f1f7\"}.la-flag-checkered:before{content:\"\\f1f8\"}.la-flag-o:before{content:\"\\f1f9\"}.la-flash:before{content:\"\\f1fa\"}.la-flask:before{content:\"\\f1fb\"}.la-flickr:before{content:\"\\f1fc\"}.la-floppy-o:before{content:\"\\f1fd\"}.la-folder:before{content:\"\\f1fe\"}.la-folder-o:before{content:\"\\f1ff\"}.la-folder-open:before{content:\"\\f200\"}.la-folder-open-o:before{content:\"\\f201\"}.la-font:before{content:\"\\f202\"}.la-fonticons:before{content:\"\\f203\"}.la-forumbee:before{content:\"\\f204\"}.la-forward:before{content:\"\\f205\"}.la-foursquare:before{content:\"\\f206\"}.la-frown-o:before{content:\"\\f207\"}.la-futbol-o:before,.la-soccer-ball-o:before{content:\"\\f208\"}.la-gamepad:before{content:\"\\f209\"}.la-gavel:before{content:\"\\f20a\"}.la-gbp:before{content:\"\\f20b\"}.la-gear:before{content:\"\\f20c\"}.la-gears:before{content:\"\\f20d\"}.la-genderless:before{content:\"\\f20e\"}.la-get-pocket:before{content:\"\\f20f\"}.la-gg:before{content:\"\\f210\"}.la-gg-circle:before{content:\"\\f211\"}.la-gift:before{content:\"\\f212\"}.la-git:before{content:\"\\f213\"}.la-git-square:before{content:\"\\f214\"}.la-github:before{content:\"\\f215\"}.la-github-alt:before{content:\"\\f216\"}.la-github-square:before{content:\"\\f217\"}.la-glass:before{content:\"\\f218\"}.la-globe:before{content:\"\\f219\"}.la-google:before{content:\"\\f21a\"}.la-google-plus:before{content:\"\\f21b\"}.la-google-plus-square:before{content:\"\\f21c\"}.la-google-wallet:before{content:\"\\f21d\"}.la-graduation-cap:before{content:\"\\f21e\"}.la-gittip:before,.la-gratipay:before{content:\"\\f21f\"}.la-group:before{content:\"\\f220\"}.la-h-square:before{content:\"\\f221\"}.la-hacker-news:before{content:\"\\f222\"}.la-hand-grab-o:before{content:\"\\f223\"}.la-hand-lizard-o:before{content:\"\\f224\"}.la-hand-o-down:before{content:\"\\f225\"}.la-hand-o-left:before{content:\"\\f226\"}.la-hand-o-right:before{content:\"\\f227\"}.la-hand-o-up:before{content:\"\\f228\"}.la-hand-paper-o:before{content:\"\\f229\"}.la-hand-peace-o:before{content:\"\\f22a\"}.la-hand-pointer-o:before{content:\"\\f22b\"}.la-hand-rock-o:before{content:\"\\f22c\"}.la-hand-scissors-o:before{content:\"\\f22d\"}.la-hand-spock-o:before{content:\"\\f22e\"}.la-hand-stop-o:before{content:\"\\f22f\"}.la-hdd-o:before{content:\"\\f230\"}.la-header:before{content:\"\\f231\"}.la-headphones:before{content:\"\\f232\"}.la-heart:before{content:\"\\f233\"}.la-heart-o:before{content:\"\\f234\"}.la-heartbeat:before{content:\"\\f235\"}.la-history:before{content:\"\\f236\"}.la-home:before{content:\"\\f237\"}.la-hospital-o:before{content:\"\\f238\"}.la-hotel:before{content:\"\\f239\"}.la-hourglass:before{content:\"\\f23a\"}.la-hourglass-1:before{content:\"\\f23b\"}.la-hourglass-2:before{content:\"\\f23c\"}.la-hourglass-3:before{content:\"\\f23d\"}.la-hourglass-end:before{content:\"\\f23e\"}.la-hourglass-half:before{content:\"\\f23f\"}.la-hourglass-o:before{content:\"\\f240\"}.la-hourglass-start:before{content:\"\\f241\"}.la-houzz:before{content:\"\\f242\"}.la-html5:before{content:\"\\f243\"}.la-i-cursor:before{content:\"\\f244\"}.la-ils:before{content:\"\\f245\"}.la-image:before{content:\"\\f246\"}.la-inbox:before{content:\"\\f247\"}.la-indent:before{content:\"\\f248\"}.la-industry:before{content:\"\\f249\"}.la-info:before{content:\"\\f24a\"}.la-info-circle:before{content:\"\\f24b\"}.la-inr:before{content:\"\\f24c\"}.la-instagram:before{content:\"\\f24d\"}.la-institution:before{content:\"\\f24e\"}.la-internet-explorer:before{content:\"\\f24f\"}.la-ioxhost:before{content:\"\\f250\"}.la-italic:before{content:\"\\f251\"}.la-joomla:before{content:\"\\f252\"}.la-jpy:before{content:\"\\f253\"}.la-jsfiddle:before{content:\"\\f254\"}.la-key:before{content:\"\\f255\"}.la-keyboard-o:before{content:\"\\f256\"}.la-krw:before{content:\"\\f257\"}.la-language:before{content:\"\\f258\"}.la-laptop:before{content:\"\\f259\"}.la-lastfm:before{content:\"\\f25a\"}.la-lastfm-square:before{content:\"\\f25b\"}.la-leaf:before{content:\"\\f25c\"}.la-leanpub:before{content:\"\\f25d\"}.la-legal:before{content:\"\\f25e\"}.la-lemon-o:before{content:\"\\f25f\"}.la-level-down:before{content:\"\\f260\"}.la-level-up:before{content:\"\\f261\"}.la-life-bouy:before{content:\"\\f262\"}.la-life-buoy:before{content:\"\\f263\"}.la-life-ring:before,.la-support:before{content:\"\\f264\"}.la-life-saver:before{content:\"\\f265\"}.la-lightbulb-o:before{content:\"\\f266\"}.la-line-chart:before{content:\"\\f267\"}.la-link:before{content:\"\\f268\"}.la-linkedin:before{content:\"\\f269\"}.la-linkedin-square:before{content:\"\\f26a\"}.la-linux:before{content:\"\\f26b\"}.la-list:before{content:\"\\f26c\"}.la-list-alt:before{content:\"\\f26d\"}.la-list-ol:before{content:\"\\f26e\"}.la-list-ul:before{content:\"\\f26f\"}.la-location-arrow:before{content:\"\\f270\"}.la-lock:before{content:\"\\f271\"}.la-long-arrow-down:before{content:\"\\f272\"}.la-long-arrow-left:before{content:\"\\f273\"}.la-long-arrow-right:before{content:\"\\f274\"}.la-long-arrow-up:before{content:\"\\f275\"}.la-magic:before{content:\"\\f276\"}.la-magnet:before{content:\"\\f277\"}.la-mail-forward:before{content:\"\\f278\"}.la-mail-reply:before{content:\"\\f279\"}.la-mail-reply-all:before{content:\"\\f27a\"}.la-male:before{content:\"\\f27b\"}.la-map:before{content:\"\\f27c\"}.la-map-marker:before{content:\"\\f27d\"}.la-map-o:before{content:\"\\f27e\"}.la-map-pin:before{content:\"\\f27f\"}.la-map-signs:before{content:\"\\f280\"}.la-mars:before{content:\"\\f281\"}.la-mars-double:before{content:\"\\f282\"}.la-mars-stroke:before{content:\"\\f283\"}.la-mars-stroke-h:before{content:\"\\f284\"}.la-mars-stroke-v:before{content:\"\\f285\"}.la-maxcdn:before{content:\"\\f286\"}.la-meanpath:before{content:\"\\f287\"}.la-medium:before{content:\"\\f288\"}.la-medkit:before{content:\"\\f289\"}.la-meh-o:before{content:\"\\f28a\"}.la-mercury:before{content:\"\\f28b\"}.la-microphone:before{content:\"\\f28c\"}.la-microphone-slash:before{content:\"\\f28d\"}.la-minus:before{content:\"\\f28e\"}.la-minus-circle:before{content:\"\\f28f\"}.la-minus-square:before{content:\"\\f290\"}.la-minus-square-o:before{content:\"\\f291\"}.la-mobile:before{content:\"\\f292\"}.la-mobile-phone:before{content:\"\\f293\"}.la-money:before{content:\"\\f294\"}.la-moon-o:before{content:\"\\f295\"}.la-mortar-board:before{content:\"\\f296\"}.la-motorcycle:before{content:\"\\f297\"}.la-mouse-pointer:before{content:\"\\f298\"}.la-music:before{content:\"\\f299\"}.la-navicon:before{content:\"\\f29a\"}.la-neuter:before{content:\"\\f29b\"}.la-newspaper-o:before{content:\"\\f29c\"}.la-object-group:before{content:\"\\f29d\"}.la-object-ungroup:before{content:\"\\f29e\"}.la-odnoklassniki:before{content:\"\\f29f\"}.la-odnoklassniki-square:before{content:\"\\f2a0\"}.la-opencart:before{content:\"\\f2a1\"}.la-openid:before{content:\"\\f2a2\"}.la-opera:before{content:\"\\f2a3\"}.la-optin-monster:before{content:\"\\f2a4\"}.la-outdent:before{content:\"\\f2a5\"}.la-pagelines:before{content:\"\\f2a6\"}.la-paint-brush:before{content:\"\\f2a7\"}.la-paper-plane:before,.la-send:before{content:\"\\f2a8\"}.la-paper-plane-o:before,.la-send-o:before{content:\"\\f2a9\"}.la-paperclip:before{content:\"\\f2aa\"}.la-paragraph:before{content:\"\\f2ab\"}.la-paste:before{content:\"\\f2ac\"}.la-pause:before{content:\"\\f2ad\"}.la-paw:before{content:\"\\f2ae\"}.la-paypal:before{content:\"\\f2af\"}.la-pencil:before{content:\"\\f2b0\"}.la-pencil-square:before{content:\"\\f2b1\"}.la-pencil-square-o:before{content:\"\\f2b2\"}.la-phone:before{content:\"\\f2b3\"}.la-phone-square:before{content:\"\\f2b4\"}.la-photo:before{content:\"\\f2b5\"}.la-picture-o:before{content:\"\\f2b6\"}.la-pie-chart:before{content:\"\\f2b7\"}.la-pied-piper:before{content:\"\\f2b8\"}.la-pied-piper-alt:before{content:\"\\f2b9\"}.la-pinterest:before{content:\"\\f2ba\"}.la-pinterest-p:before{content:\"\\f2bb\"}.la-pinterest-square:before{content:\"\\f2bc\"}.la-plane:before{content:\"\\f2bd\"}.la-play:before{content:\"\\f2be\"}.la-play-circle:before{content:\"\\f2bf\"}.la-play-circle-o:before{content:\"\\f2c0\"}.la-plug:before{content:\"\\f2c1\"}.la-plus:before{content:\"\\f2c2\"}.la-plus-circle:before{content:\"\\f2c3\"}.la-plus-square:before{content:\"\\f2c4\"}.la-plus-square-o:before{content:\"\\f2c5\"}.la-power-off:before{content:\"\\f2c6\"}.la-print:before{content:\"\\f2c7\"}.la-puzzle-piece:before{content:\"\\f2c8\"}.la-qq:before{content:\"\\f2c9\"}.la-qrcode:before{content:\"\\f2ca\"}.la-question:before{content:\"\\f2cb\"}.la-question-circle:before{content:\"\\f2cc\"}.la-quote-left:before{content:\"\\f2cd\"}.la-quote-right:before{content:\"\\f2ce\"}.la-ra:before{content:\"\\f2cf\"}.la-random:before{content:\"\\f2d0\"}.la-rebel:before{content:\"\\f2d1\"}.la-recycle:before{content:\"\\f2d2\"}.la-reddit:before{content:\"\\f2d3\"}.la-reddit-square:before{content:\"\\f2d4\"}.la-refresh:before{content:\"\\f2d5\"}.la-registered:before{content:\"\\f2d6\"}.la-renren:before{content:\"\\f2d7\"}.la-reorder:before{content:\"\\f2d8\"}.la-repeat:before{content:\"\\f2d9\"}.la-reply:before{content:\"\\f2da\"}.la-reply-all:before{content:\"\\f2db\"}.la-retweet:before{content:\"\\f2dc\"}.la-rmb:before{content:\"\\f2dd\"}.la-road:before{content:\"\\f2de\"}.la-rocket:before{content:\"\\f2df\"}.la-rotate-left:before{content:\"\\f2e0\"}.la-rotate-right:before{content:\"\\f2e1\"}.la-rouble:before{content:\"\\f2e2\"}.la-feed:before,.la-rss:before{content:\"\\f2e3\"}.la-rss-square:before{content:\"\\f2e4\"}.la-rub:before{content:\"\\f2e5\"}.la-ruble:before{content:\"\\f2e6\"}.la-rupee:before{content:\"\\f2e7\"}.la-safari:before{content:\"\\f2e8\"}.la-save:before{content:\"\\f2e9\"}.la-scissors:before{content:\"\\f2ea\"}.la-search:before{content:\"\\f2eb\"}.la-search-minus:before{content:\"\\f2ec\"}.la-search-plus:before{content:\"\\f2ed\"}.la-sellsy:before{content:\"\\f2ee\"}.la-server:before{content:\"\\f2ef\"}.la-share:before{content:\"\\f2f0\"}.la-share-alt:before{content:\"\\f2f1\"}.la-share-alt-square:before{content:\"\\f2f2\"}.la-share-square:before{content:\"\\f2f3\"}.la-share-square-o:before{content:\"\\f2f4\"}.la-shekel:before{content:\"\\f2f5\"}.la-sheqel:before{content:\"\\f2f6\"}.la-shield:before{content:\"\\f2f7\"}.la-ship:before{content:\"\\f2f8\"}.la-shirtsinbulk:before{content:\"\\f2f9\"}.la-shopping-cart:before{content:\"\\f2fa\"}.la-sign-in:before{content:\"\\f2fb\"}.la-sign-out:before{content:\"\\f2fc\"}.la-signal:before{content:\"\\f2fd\"}.la-simplybuilt:before{content:\"\\f2fe\"}.la-sitemap:before{content:\"\\f2ff\"}.la-skyatlas:before{content:\"\\f300\"}.la-skype:before{content:\"\\f301\"}.la-slack:before{content:\"\\f302\"}.la-sliders:before{content:\"\\f303\"}.la-slideshare:before{content:\"\\f304\"}.la-smile-o:before{content:\"\\f305\"}.la-sort:before,.la-unsorted:before{content:\"\\f306\"}.la-sort-alpha-asc:before{content:\"\\f307\"}.la-sort-alpha-desc:before{content:\"\\f308\"}.la-sort-amount-asc:before{content:\"\\f309\"}.la-sort-amount-desc:before{content:\"\\f30a\"}.la-sort-asc:before,.la-sort-up:before{content:\"\\f30b\"}.la-sort-desc:before,.la-sort-down:before{content:\"\\f30c\"}.la-sort-numeric-asc:before{content:\"\\f30d\"}.la-sort-numeric-desc:before{content:\"\\f30e\"}.la-soundcloud:before{content:\"\\f30f\"}.la-space-shuttle:before{content:\"\\f310\"}.la-spinner:before{content:\"\\f311\"}.la-spoon:before{content:\"\\f312\"}.la-spotify:before{content:\"\\f313\"}.la-square:before{content:\"\\f314\"}.la-square-o:before{content:\"\\f315\"}.la-stack-exchange:before{content:\"\\f316\"}.la-stack-overflow:before{content:\"\\f317\"}.la-star:before{content:\"\\f318\"}.la-star-half:before{content:\"\\f319\"}.la-star-half-empty:before,.la-star-half-full:before,.la-star-half-o:before{content:\"\\f31a\"}.la-star-o:before{content:\"\\f31b\"}.la-steam:before{content:\"\\f31c\"}.la-steam-square:before{content:\"\\f31d\"}.la-step-backward:before{content:\"\\f31e\"}.la-step-forward:before{content:\"\\f31f\"}.la-stethoscope:before{content:\"\\f320\"}.la-sticky-note:before{content:\"\\f321\"}.la-sticky-note-o:before{content:\"\\f322\"}.la-stop:before{content:\"\\f323\"}.la-street-view:before{content:\"\\f324\"}.la-strikethrough:before{content:\"\\f325\"}.la-stumbleupon:before{content:\"\\f326\"}.la-stumbleupon-circle:before{content:\"\\f327\"}.la-subscript:before{content:\"\\f328\"}.la-subway:before{content:\"\\f329\"}.la-suitcase:before{content:\"\\f32a\"}.la-sun-o:before{content:\"\\f32b\"}.la-superscript:before{content:\"\\f32c\"}.la-table:before{content:\"\\f32d\"}.la-tablet:before{content:\"\\f32e\"}.la-tachometer:before{content:\"\\f32f\"}.la-tag:before{content:\"\\f330\"}.la-tags:before{content:\"\\f331\"}.la-tasks:before{content:\"\\f332\"}.la-taxi:before{content:\"\\f333\"}.la-television:before,.la-tv:before{content:\"\\f334\"}.la-tencent-weibo:before{content:\"\\f335\"}.la-terminal:before{content:\"\\f336\"}.la-text-height:before{content:\"\\f337\"}.la-text-width:before{content:\"\\f338\"}.la-th:before{content:\"\\f339\"}.la-th-large:before{content:\"\\f33a\"}.la-th-list:before{content:\"\\f33b\"}.la-thumb-tack:before{content:\"\\f33c\"}.la-thumbs-down:before{content:\"\\f33d\"}.la-thumbs-o-down:before{content:\"\\f33e\"}.la-thumbs-o-up:before{content:\"\\f33f\"}.la-thumbs-up:before{content:\"\\f340\"}.la-ticket:before{content:\"\\f341\"}.la-remove:before,.la-times:before{content:\"\\f342\"}.la-times-circle:before{content:\"\\f343\"}.la-times-circle-o:before{content:\"\\f344\"}.la-tint:before{content:\"\\f345\"}.la-toggle-off:before{content:\"\\f346\"}.la-toggle-on:before{content:\"\\f347\"}.la-trademark:before{content:\"\\f348\"}.la-train:before{content:\"\\f349\"}.la-intersex:before,.la-transgender:before{content:\"\\f34a\"}.la-transgender-alt:before{content:\"\\f34b\"}.la-trash:before{content:\"\\f34c\"}.la-trash-o:before{content:\"\\f34d\"}.la-tree:before{content:\"\\f34e\"}.la-trello:before{content:\"\\f34f\"}.la-tripadvisor:before{content:\"\\f350\"}.la-trophy:before{content:\"\\f351\"}.la-truck:before{content:\"\\f352\"}.la-try:before{content:\"\\f353\"}.la-tty:before{content:\"\\f354\"}.la-tumblr:before{content:\"\\f355\"}.la-tumblr-square:before{content:\"\\f356\"}.la-turkish-lira:before{content:\"\\f357\"}.la-twitch:before{content:\"\\f358\"}.la-twitter:before{content:\"\\f359\"}.la-twitter-square:before{content:\"\\f35a\"}.la-umbrella:before{content:\"\\f35b\"}.la-underline:before{content:\"\\f35c\"}.la-undo:before{content:\"\\f35d\"}.la-university:before{content:\"\\f35e\"}.la-unlink:before{content:\"\\f35f\"}.la-unlock:before{content:\"\\f360\"}.la-unlock-alt:before{content:\"\\f361\"}.la-upload:before{content:\"\\f362\"}.la-usd:before{content:\"\\f363\"}.la-user:before{content:\"\\f364\"}.la-user-md:before{content:\"\\f365\"}.la-user-plus:before{content:\"\\f366\"}.la-user-secret:before{content:\"\\f367\"}.la-user-times:before{content:\"\\f368\"}.la-users:before{content:\"\\f369\"}.la-venus:before{content:\"\\f36a\"}.la-venus-double:before{content:\"\\f36b\"}.la-venus-mars:before{content:\"\\f36c\"}.la-viacoin:before{content:\"\\f36d\"}.la-video-camera:before{content:\"\\f36e\"}.la-vimeo:before{content:\"\\f36f\"}.la-vimeo-square:before{content:\"\\f370\"}.la-vine:before{content:\"\\f371\"}.la-vk:before{content:\"\\f372\"}.la-volume-down:before{content:\"\\f373\"}.la-volume-off:before{content:\"\\f374\"}.la-volume-up:before{content:\"\\f375\"}.la-warning:before{content:\"\\f376\"}.la-wechat:before{content:\"\\f377\"}.la-weibo:before{content:\"\\f378\"}.la-weixin:before{content:\"\\f379\"}.la-whatsapp:before{content:\"\\f37a\"}.la-wheelchair:before{content:\"\\f37b\"}.la-wifi:before{content:\"\\f37c\"}.la-wikipedia-w:before{content:\"\\f37d\"}.la-windows:before{content:\"\\f37e\"}.la-won:before{content:\"\\f37f\"}.la-wordpress:before{content:\"\\f380\"}.la-wrench:before{content:\"\\f381\"}.la-xing:before{content:\"\\f382\"}.la-xing-square:before{content:\"\\f383\"}.la-y-combinator:before{content:\"\\f384\"}.la-y-combinator-square:before{content:\"\\f385\"}.la-yahoo:before{content:\"\\f386\"}.la-yc:before{content:\"\\f387\"}.la-yc-square:before{content:\"\\f388\"}.la-yelp:before{content:\"\\f389\"}.la-yen:before{content:\"\\f38a\"}.la-youtube:before{content:\"\\f38b\"}.la-youtube-play:before{content:\"\\f38c\"}.la-youtube-square:before{content:\"\\f38d\"}input[type=password],input[type=text]{box-sizing:border-box}.calendar{display:block;max-width:270px;margin:4px;float:left}.calendar .daterangepicker_input{padding-right:12px;position:relative}.calendar .daterangepicker_input i{display:block;position:absolute;top:10px;left:8px}.calendar .daterangepicker_input .input-mini{border:1px solid #ccc;height:auto;padding:.65rem 1rem .65rem 2.2rem;line-height:1.25;border-radius:4px;color:#555;display:block;margin:0 0 5px;width:100%}.calendar .daterangepicker_input .input-mini.active,.calendar .daterangepicker_input .input-mini:focus{border:1px solid #716aca;border-radius:4px;outline:0}.calendar .calendar-table{border:1px solid #fff;padding:4px;border-radius:4px;background-color:#fff}.calendar table{width:100%;margin:0;font-size:.8rem;border-spacing:0}.calendar table thead th{font-weight:500}.calendar table thead th.next,.calendar table thead thead th.prev{font-size:1.3rem}.calendar table thead th.next:hover,.calendar table thead th.prev:hover{background:#ebedf2}.calendar table td,.calendar table th{white-space:nowrap;text-align:center;min-width:35px;width:35px;height:35px;border-radius:3px;border:0;vertical-align:middle;line-height:0}.calendar table td:hover{background:#ebedf2}.calendar table td.today{border-radius:3px;background:#828ee6;color:#fff;position:relative;cursor:pointer}.calendar table td.today:before{content:'';display:inline-block;border:solid transparent;border-width:0 0 7px 7px;border-bottom-color:#fff;border-top-color:rgba(0,0,0,.2);position:absolute;bottom:4px;right:4px}.calendar table td.in-range{border-radius:0!important}.calendar table td.active,.calendar table td.in-range{background:#5867dd;color:#fff}.calendar table td.start-date{border-radius:4px 0 0 4px}.calendar table td.end-date{border-radius:0 4px 4px 0}.calendar table td.start-date.end-date{border-radius:3px}.calendar table td.off{background-color:#fff!important;border-color:transparent!important;color:#7b7e8a!important}.n-btn:not(:disabled):not(.disabled){cursor:pointer}.buttons-field{text-align:right}.buttons-field .n-btn{padding:.6rem 1rem;margin-right:6px;border-radius:1rem}.buttons-field .n-btn.n-btn-success{color:#fff;background-color:#34bfa3;border-color:#34bfa3}@media (min-width:564px){.calendar .calendar-table{padding-right:12px;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}}"]
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return []; };
    CalendarComponent.propDecorators = {
        apply: [{ type: Output }],
        cancel: [{ type: Output }],
        ranges: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }],
        triggered: [{ type: Input }]
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxDaterangepickerModule = /** @class */ (function () {
    function NgxDaterangepickerModule() {
    }
    NgxDaterangepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [DaterangepickerComponent,
                        CalendarComponent],
                    exports: [DaterangepickerComponent]
                },] },
    ];
    return NgxDaterangepickerModule;
}());
// @NgModule({
//   declarations: [
//     DaterangepickerComponent,
//     CalendarComponent
//   ],
//   imports: [
//     CommonModule
//   ],
//   exports: [
//     DaterangepickerComponent
//   ]
// })
// export class DaterangepickerModule {
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: DaterangepickerModule,
//       providers: []
//     };
//   }
// }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxDaterangepickerModule, CalendarComponent as ɵb, DaterangepickerComponent as ɵa };
