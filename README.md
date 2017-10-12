# React Utils Button
Lightweight React Button component, serving as an utility wrapper over the HTML button element.

## Installation

```sh
npm install react-utils-button
```

## Usage

```javascript
import Button from 'react-utils-button';

<Button value='Click me'
		className="my-extra-class"
		onClick={() => { console.log('clicked'); }}
		active={false}
		disabled={false}/>
```

The library can also be loaded via require: 

```javascript
const Button = require('react-utils-button')
```

## Options
- **value** (string, required) - value to be displayed inside the button
- **className** (string) - extra classes
- **onClick** (function) - callback function
- **active** (boolean, default: false) - force active state; adds a **utils-button--active** class
- **disabled** (boolean, default: false) - disabled state for the button; once disabled the onClick callback does not fire anymore

### Licence
The code is open-source and available under the MIT Licence. More details in the LICENCE.md file.