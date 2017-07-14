const SHORT = 0x00
const LONG = 0x01

const TOP = 0x00
const CENTER = 0x01
const BOTTOM = 0x02

const lengthValues = {
  [SHORT]: 2400,
  [LONG]: 4000
}

const transitionDuration = 450

export default class WebToast {
  constructor () {
    this.classname = null
    this.currentTimeoutId = null
    this.hide = this.hide.bind(this)
    this._moveOut = this._moveOut.bind(this)

    // creating element, necessary properties
    this.el = window.document.createElement('div')
    this.el.style.cursor = 'default'
    this.el.style.opacity = '0'
    this.el.style.position = 'fixed'
    this.el.style.top = '-100px'
    this.el.style.userSelect = 'none'

    // additional stylistic properties
    this._setDefaultStylistic()

    // append element to the document
    if (window && window.document) {
      document.addEventListener('DOMContentLoaded', () => {
        window.document.body.appendChild(this.el)
      })
    }

    return this
  }

  setClass (classname) {
    this._unsetDefaultStylistic()
    this.el.className = classname
    return this
  }

  show (text, length) {
    clearTimeout(this.currentTimeoutId)
    this.currentTimeoutId = setTimeout(this._showHide(text), lengthValues[length] || lengthValues[SHORT])
    return this
  }

  showLong (text) {
    return this.show(text, LONG)
  }

  showShort (text) {
    return this.show(text, SHORT)
  }

  _showHide (text) {
    this.el.innerHTML = text
    this.el.style.left = (document.documentElement.clientWidth - this.el.offsetWidth) / 2 + 'px'
    this.el.style.top = document.documentElement.clientHeight / 10 + 'px'
    this.el.style.opacity = '1'
    return this.hide
  }

  hide () {
    this.el.style.opacity = '0'
    this.currentTimeoutId = setTimeout(this._moveOut, transitionDuration)
    return this
  }

  _moveOut () {
    this.el.style.top = '-500px'
  }

  _setDefaultStylistic () {
    this.el.style.backgroundColor = 'white'
    this.el.style.padding = '12px 30px'
    this.el.style.border = '1px solid #EADBB4'
    this.el.style.borderRadius = '10px'
    this.el.style.boxShadow = '0 0 10px -2px #d1c1a1'
    this.el.style.transition = `opacity ${transitionDuration}ms linear`
  }

  _unsetDefaultStylistic () {
    this.el.style.backgroundColor = ''
    this.el.style.padding = ''
    this.el.style.border = ''
    this.el.style.borderRadius = ''
    this.el.style.boxShadow = ''
    this.el.style.transition = ''
  }

  get LONG () {
    return LONG
  }

  get SHORT () {
    return SHORT
  }

  get BOTTOM () {
    return BOTTOM
  }

  get CENTER () {
    return CENTER
  }

  get TOP () {
    return TOP
  }
}

WebToast.LONG = LONG
WebToast.SHORT = SHORT

WebToast.BOTTOM = BOTTOM
WebToast.CENTER = CENTER
WebToast.TOP = TOP
