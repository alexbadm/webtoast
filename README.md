# WebToast

A lightweight library for displaying short messages in the browser.

The API extends the [ReactNative ToastAndroid API](https://facebook.github.io/react-native/docs/toastandroid.html).

### Example

```javascript
import Toast from 'webtoast'

const toast = new Toast()
toast.setClass('my-toast-class')

document.addEventListener('DOMContentLoaded', () => {
  toast.showShort('the text that the user sees')
})
```

### TODO

- Append 'showWithGravity' method
