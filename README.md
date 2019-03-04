# React Utils Button [![Build Status](https://travis-ci.org/raulrene/react-utils-button.svg?branch=master)](https://travis-ci.org/raulrene/react-utils-button)
Lightweight React Button component, serving as an utility wrapper over the HTML button element.

**Demo:** https://raulrene.github.io/react-utils-button/example/

## Installation

```sh
npm i --save react-utils-button
```

## Usage

```javascript
import Button from 'react-utils-button';

<Button value='Click me'
		className='my-extra-class'
		onClick={() => { console.log('clicked'); }}
		active={false}
		loading={false}
		disabled={false}/>
```

The library can also be loaded via require: 

```javascript
const Button = require('react-utils-button');
```

## Options
- **value** (string, required) - value to be displayed inside the button
- **className** (string) - extra classes
- **onClick** (function) - callback function
- **active** (boolean, default: false) - force active state; adds a **utils-button--active** class
- **disabled** (boolean, default: false) - disabled state for the button; once disabled the onClick callback does not fire anymore
- **loading** (boolean, default: false) - sets a loading state, also automatically making it disabled; adds a **utils-button--loading** class. This can be used to style a loading state, for example a spinner to let the user know something is happening.

### Licence
The code is open-source and available under the MIT Licence. More details in the LICENCE.md file.
