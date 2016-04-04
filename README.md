# Radium Starter  [![npm version](https://img.shields.io/npm/v/radium-starter.svg)](https://www.npmjs.com/package/radium-starter)

Base styles for [Radium](http://stack.formidable.com/radium/).

## Introduction

Nope, this is not another CSS framework!

This package provides the bare minimum to make HTML/CSS a better world:

- Normalization (use [Normalize.css](https://necolas.github.io/normalize.css/)).
- Basic styling of HTML elements (heavily inspired from [Bootstrap 4](http://getbootstrap.com/)).
- Useful polyfills like [Form validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation) for Safari.
- Theme system (i.e. variables for defining colors, font sizes, etc.)
- Highly customizable and composable (thanks to [Radium](http://stack.formidable.com/radium/)).

## Compatibility

Modern browsers (including IE11).

## Demo

Have a look to the demo [here](http://mvila.github.io/radium-starter/).

## Installation

```
npm install --save radium-starter
```

## Usage

At the root of your application, define a `theme` and use `RadiumStarterRoot` to wrap your main component:

```javascript
import { RadiumStarterRoot, Theme } from 'radium-starter';

let theme = new Theme({ primaryColor: '#2196F3', accentColor: '#FF5252' });

ReactDOM.render(
  <RadiumStarterRoot theme={theme}>
    <Main />
  </RadiumStarterRoot>,
  document.getElementById('root')
);
```

Then, use the `RadiumStarter` decorator:

```javascript
import React from 'react';
import { RadiumStarter, Button } from 'radium-starter';

@RadiumStarter
export class Main extends React.Component {
  render() {
    return <p>Hello, World!</p>;
  }
}
```

Once a component is decorated, you can use all the power of [Radium](http://stack.formidable.com/radium/):

```javascript
render() {
  return <p style={{ ':hover': { color: '#2196F3' }}>Hover me</p>;
}
```

... and **Radium Starter** features, including built-in styles:

```javascript
render() {
  let s = this.styles;
  return <div style={[s.primaryColor, s.bold, s.border]}>Hello, World!</div>;
}
```

Theme variables:

```javascript
render() {
  let t = this.theme;
  return <div style={{ color: t.errorColor }}>An error occurred</div>;
}
```

And enhanced HTML elements:

```javascript
render() {
  return <Button rsLarge rsPrimary>Sign up</Button>;
}
```

## Built-in styles

Components decorated by `RadiumStarter` get a `styles` property containing many convenient styles usable with the `style` property of any HTML element.

Example : `<span style={this.styles.primaryColor}>Hello, World!</span>`.

Thanks to [Radium](http://stack.formidable.com/radium/) goodness, you can combine several styles with an array:

Example : `<span style={[this.styles.bold, this.styles.italic]}>Hi</span>`.

### Text colors

`primaryColor`, `darkPrimaryColor`, `lightPrimaryColor`, `accentColor`, `darkAccentColor`, `bodyColor`, `altBodyColor`, `borderColor`, `altBorderColor`, `primaryTextColor`, `secondaryTextColor`, `mutedTextColor`, `inversePrimaryTextColor`, `inverseSecondaryTextColor`, `inverseMutedTextColor`, `errorColor`, `warningColor`: convenient styles to define text color (CSS `color` property).

Example : `<span style={[this.styles.warningColor]}>Notice</span>`

### Background colors

`backgroundPrimaryColor`, `backgroundDarkPrimaryColor`, `backgroundLightPrimaryColor`, `backgroundAccentColor`, `backgroundDarkAccentColor`, `backgroundBodyColor`, `backgroundAltBodyColor`, `backgroundErrorColor`, `backgroundWarningColor`: convenient styles to define background color (CSS `backgroundColor` property).

Example : `<span style={[this.styles.backgroundPrimaryColor]}>Bonjour</span>`

### Text styling

`regular`: set `font-weight` to `normal`.

`bold`: set `font-weight` to `bold`.

`italic`: set `font-style` to `italic`.

`mutedText`: set `color` to `mutedTextColor` theme variable.

### Block styling

`border`: add `top`, `right`, `bottom` and `left` borders.

`topBorder`, `rightBorder`, `bottomBorder`, `leftBorder`: add the corresponding border.

`rounded`: set `borderRadius` to `borderRadius` theme variable.

### List styling

`unstyledList`: remove default HTML list (`ul`, `ol`) styling.


### Responsive styling

`shownIfSmall`/`hiddenIfSmall`: show/hide an HTML element if the viewport width is less/greater than the `smallBreakpoint` theme variable (*default:* `640px`).

`shownIfMedium`/`hiddenIfMedium`: show/hide an HTML element if the viewport width is less/greater than the `mediumBreakpoint` theme variable (*default:* `1024px`).

`shownIfLarge`/`hiddenIfLarge`: show/hide an HTML element if the viewport width is less/greater than the `largeBreakpoint` theme variable (*default:* `1440px`).

### Utilities

`shownIf(condition)`: convenient function to hide an HTML element if `condition` is `false`.

`hiddenIf(condition)`: convenient function to hide an HTML element if `condition` is `true`.

### More

Check [styles.js](https://github.com/mvila/radium-starter/blob/master/src/styles.js) for the full set of styles.

## License

MIT
