"use strict";

module.exports = function (h) {
  var _this = this;

  var getChikyuSortClassFunc = function (_this,column) {
    var cls = "";
    if (column == _this.orderBy.column) {
      cls += _this.orderBy.ascending == 1 ? "chikyuTableSortButtonDown" : "chikyuTableSortButtonUp";
    }
    return cls;
  }

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
          [h("div",{"class": getChikyuSortClassFunc(this,column)}),this.getHeading(column, h)]
        )]
      ));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) headings.push(h("th"));

    return headings;
  };
};
