export default class WebToast {
    static readonly LONG: number;
    static readonly SHORT: number;
    static readonly BOTTOM: number;
    static readonly CENTER: number;
    static readonly TOP: number;
    private currentTimeoutId;
    private el;
    constructor(classname?: string);
    setClass(classname: string): WebToast;
    show(text: string, length: number): WebToast;
    showLong(text: string): WebToast;
    showShort(text: string): WebToast;
    hide(): WebToast;
    private _showHide(text);
    private _moveOut();
    private _setDefaultStylistic();
    private _unsetDefaultStylistic();
}
