# WebToast

A lightweight library for displaying short messages in the browser.

The API extends the [ReactNative ToastAndroid API](https://facebook.github.io/react-native/docs/toastandroid.html).

## Get started

```javascript
import Toast from 'webtoast'

const toast = new Toast()
toast.show('Some important message...', toast.LONG)
```

## Example

```javascript
import Toast from 'webtoast'

const toast = new Toast()
// If you want you may specify your own classname for the toast element:
toast.setClass('my-toast-class')

// Or you may to chain those operations:
const toast = new Toast().setClass('my-toast-class')

document.addEventListener('DOMContentLoaded', () => {
  toast.showShort('the text that the user sees')
})
```

## API

### Methods

- **setClass(classname)** - replaces default styles by the custom css class
- **show(message, duration)** - show toast by specified duration
- **showLong(message)** - synonym of show(message, toast.LONG)
- **showShort(message)** - synonym of show(message, toast.SHORT)
- **showWithGravity(message, duration, gravity)** - show toast by specified duration and with specified gravity. ⚠ Not implemented!

### Properties

```js
// Toast duration constants:
SHORT
LONG

// Toast gravity constants:
TOP
BOTTON
CENTER
```

## TODO

- To implement 'showWithGravity' method
