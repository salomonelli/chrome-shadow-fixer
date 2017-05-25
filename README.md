# chrome-shadow-fixer
This module makes box-shadows printable in Chrome (up to v.38).

## Usage

### Browser

Add the javascript file /dist/javascript.js:

```
<script type="text/javascript" src="javascript.js"></script>
```


and call:

```
<script>
  window.onload = function() {
    ChromeShadowFixer.fix();
  };
</script>
```


### ES6

Install via npm:

```
npm i --save chrome-shadow-fixer
```

Import and use with:

```javascript
import {fix} from 'chrome-shadow-fixer';
fix();
```

## Options

You can apply the method fix on specific elements by passing them:
```javascript
const elements = document.getElementsByTagName('*');
fix(elements);
```
