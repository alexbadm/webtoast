"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LONG = 0x01;
var SHORT = 0x00;
var lengthValues = (_a = {},
    _a[SHORT] = 2400,
    _a[LONG] = 4000,
    _a);
var transitionDuration = 450;
var WebToast = /** @class */ (function () {
    function WebToast(classname) {
        if (classname === void 0) { classname = ''; }
        var _this = this;
        this.hide = this.hide.bind(this);
        this._moveOut = this._moveOut.bind(this);
        // creating element, necessary properties
        this.el = window.document.createElement('div');
        this.el.style.cursor = 'default';
        this.el.style.opacity = '0';
        this.el.style.position = 'fixed';
        this.el.style.top = '-100px';
        this.el.style.userSelect = 'none';
        // append element to the document
        if (window && window.document) {
            document.addEventListener('DOMContentLoaded', function () {
                window.document.body.appendChild(_this.el);
            });
        }
        return classname === '' ? this._setDefaultStylistic() : this.setClass(classname);
    }
    WebToast.prototype.setClass = function (classname) {
        this._unsetDefaultStylistic();
        this.el.className = classname;
        return this;
    };
    WebToast.prototype.show = function (text, length) {
        clearTimeout(this.currentTimeoutId);
        this.currentTimeoutId = window.setTimeout(this._showHide(text), lengthValues[length] || lengthValues[WebToast.SHORT]);
        return this;
    };
    WebToast.prototype.showLong = function (text) {
        return this.show(text, WebToast.LONG);
    };
    WebToast.prototype.showShort = function (text) {
        return this.show(text, WebToast.SHORT);
    };
    WebToast.prototype.hide = function () {
        this.el.style.opacity = '0';
        this.currentTimeoutId = window.setTimeout(this._moveOut, transitionDuration);
        return this;
    };
    WebToast.prototype._showHide = function (text) {
        this.el.innerHTML = text;
        this.el.style.left = (document.documentElement.clientWidth - this.el.offsetWidth) / 2 + 'px';
        this.el.style.top = document.documentElement.clientHeight / 10 + 'px';
        this.el.style.opacity = '1';
        return this.hide;
    };
    WebToast.prototype._moveOut = function () {
        this.el.style.top = '-500px';
    };
    WebToast.prototype._setDefaultStylistic = function () {
        this.el.style.backgroundColor = 'white';
        this.el.style.padding = '12px 30px';
        this.el.style.border = '1px solid #EADBB4';
        this.el.style.borderRadius = '10px';
        this.el.style.boxShadow = '0 0 10px -2px #d1c1a1';
        this.el.style.transition = "opacity " + transitionDuration + "ms linear";
        return this;
    };
    WebToast.prototype._unsetDefaultStylistic = function () {
        this.el.style.backgroundColor = '';
        this.el.style.padding = '';
        this.el.style.border = '';
        this.el.style.borderRadius = '';
        this.el.style.boxShadow = '';
        this.el.style.transition = '';
        return this;
    };
    WebToast.LONG = LONG;
    WebToast.SHORT = SHORT;
    WebToast.BOTTOM = 0x02;
    WebToast.CENTER = 0x01;
    WebToast.TOP = 0x00;
    return WebToast;
}());
exports.default = WebToast;
var _a;
