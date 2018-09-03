"use strict";

module.exports = function (h) {
  var _this = this;

  return function (right) {
    var sortControl = require('./sort-control')(h, right);

    var headings = [];

    if (_this.hasChildRow && _this.opts.childRowTogglerFirst) headings.push(h("th"));

    _this.allColumns.map(function (column) {
      headings.push(h(
        "th",
        {
          on: {
            "click": this.orderByColumn.bind(this, column)
          },

          "class": this.sortableClass(column) },
        [h(
          "div",
          { "class": "VueTables__heading chikyu_th_child", attrs: { title: this.getHeadingTooltip(column, h) }
          },
          [this.getHeading(column, h),sortControl.call(this, column)]
        )]
      ));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) headings.push(h("th"));

    return headings;
  };
};
