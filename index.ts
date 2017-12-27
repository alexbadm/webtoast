const LONG: number = 0x01;
const SHORT: number = 0x00;

const lengthValues: { [idx: number]: number } = {
  [SHORT]: 2400,
  [LONG]: 4000,
};

const transitionDuration = 450;

export default class WebToast {
  public static readonly LONG: number = LONG;
  public static readonly SHORT: number = SHORT;

  public static readonly BOTTOM: number = 0x02;
  public static readonly CENTER: number = 0x01;
  public static readonly TOP: number = 0x00;

  private currentTimeoutId: number;
  private el: HTMLElement;

  constructor(classname: string = '') {
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
      document.addEventListener('DOMContentLoaded', () => {
        window.document.body.appendChild(this.el);
      });
    }

    return classname === '' ? this._setDefaultStylistic() : this.setClass(classname);
  }

  public setClass(classname: string): WebToast {
    this._unsetDefaultStylistic();
    this.el.className = classname;
    return this;
  }

  public show(text: string, length: number): WebToast {
    clearTimeout(this.currentTimeoutId);
    this.currentTimeoutId = window.setTimeout(this._showHide(text),
      lengthValues[length] || lengthValues[WebToast.SHORT]);
    return this;
  }

  public showLong(text: string): WebToast {
    return this.show(text, WebToast.LONG);
  }

  public showShort(text: string): WebToast {
    return this.show(text, WebToast.SHORT);
  }

  public hide(): WebToast {
    this.el.style.opacity = '0';
    this.currentTimeoutId = window.setTimeout(this._moveOut, transitionDuration);
    return this;
  }

  private _showHide(text: string): () => WebToast {
    this.el.innerHTML = text;
    this.el.style.left = (document.documentElement.clientWidth - this.el.offsetWidth) / 2 + 'px';
    this.el.style.top = document.documentElement.clientHeight / 10 + 'px';
    this.el.style.opacity = '1';
    return this.hide;
  }

  private _moveOut(): void {
    this.el.style.top = '-500px';
  }

  private _setDefaultStylistic(): WebToast {
    this.el.style.backgroundColor = 'white';
    this.el.style.padding = '12px 30px';
    this.el.style.border = '1px solid #EADBB4';
    this.el.style.borderRadius = '10px';
    this.el.style.boxShadow = '0 0 10px -2px #d1c1a1';
    this.el.style.transition = `opacity ${transitionDuration}ms linear`;
    return this;
  }

  private _unsetDefaultStylistic(): WebToast {
    this.el.style.backgroundColor = '';
    this.el.style.padding = '';
    this.el.style.border = '';
    this.el.style.borderRadius = '';
    this.el.style.boxShadow = '';
    this.el.style.transition = '';
    return this;
  }
}
