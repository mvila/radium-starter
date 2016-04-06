# Radium Starter  [![npm version](https://img.shields.io/npm/v/radium-starter.svg)](https://www.npmjs.com/package/radium-starter)

The minimum viable layer on top of HTML/CSS (using React and Radium).

<!-- contentBegin -->
## Introduction

Nope, this is not another CSS framework! This package provides the bare minimum to make HTML/CSS a better world:

- Normalization (use [Normalize.css](https://necolas.github.io/normalize.css/)).
- Basic styling of HTML elements.
- Useful polyfills like [Form validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation) in Safari.
- Theme variables (i.e. variables for defining colors, font sizes, etc.)
- [Radium](http://stack.formidable.com/radium/) for flexible customization and high composability.

## Compatibility

Modern browsers (including IE11).

## Demo

Have a look to the [demo here](http://mvila.github.io/radium-starter/demo/index.html).

## Installation

```bash
npm install --save radium-starter
```

## Usage

At the root of your application, define a `theme` and use `RadiumStarterRoot` to wrap your main component:

```javascript
import { RadiumStarterRoot } from 'radium-starter';

ReactDOM.render(
  <RadiumStarterRoot theme={{ primaryColor: '#2196F3' }}>
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

... and Radium Starter features, including built-in styles:

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

## Theme variables

Radium Starter provides theme variables with sensible defaults for font sizes, colors, spacing, etc. You can pass a `theme` attribute to the `RadiumStarterRoot` component to customize any variable. For example, if you want to change the primary color, you would do something like that:

```javascript
<RadiumStarterRoot theme={{ primaryColor: '#2196F3' }}>
  <Main />
</RadiumStarterRoot>
```

But you can do even better, instead of passing a POJO object to `RadiumStarterRoot`, you can pass an instance of the `Theme` class. The advantage of using the `Theme` class is that if you change some theme variables later, all your React components will be automatically re-rendered to reflect the changes. For example:

```javascript
import { RadiumStarterRoot, Theme } from 'radium-starter';

let theme = new Theme({ primaryColor: '#2196F3' });

ReactDOM.render(
  <RadiumStarterRoot theme={theme}>
    <Main />
  </RadiumStarterRoot>,
  document.getElementById('root')
);
```

Later, changing the primary color:

```javascript
theme.primaryColor = '#FF5252';
```

... will automatically re-render everything with the new primary color.

One last thing, when you create a `Theme` instance, if you need to set a variable based on the value of another, you can specify a function:

```javascript
let theme = new Theme({ linkColor: theme => theme.accentColor });
```

Components decorated by `RadiumStarter` automatically get a `theme` property providing you an access to the current theme instance:

```javascript
import React from 'react';
import { RadiumStarter } from 'radium-starter';

@RadiumStarter
export class Main extends React.Component {
  render() {
    let t = this.theme; // Get the current theme
    return <div style={{ fontSize: t.h1FontSize }}>Special title</div>;
  }
}
```

Here is a just a few useful theme variables:

* Base colors: `primaryColor`, `accentColor`, `primaryTextColor`, `bodyColor`, `borderColor`, `errorColor`, `warningColor`.
* Font families: `sansSerifFontFamily`, `serifFontFamily`, `monospaceFontFamily`.
* Font sizes: `rootFontSize`, `largeFontSize`, `h1FontSize`, `h2FontSize`,...
* Line heights:  `baseLineHeight`, `smallLineHeight`, `headingsLineHeight`.
* Breakpoints: `smallBreakpoint`, `mediumBreakpoint`, `largeBreakpoint`.

Many other variables are available, please check the [theme.js](https://github.com/mvila/radium-starter/blob/master/src/theme.js) file.

## Built-in styles

Components decorated by `RadiumStarter` get a `styles` property containing many convenient styles usable with the `style` attribute of HTML elements.

Example :

```javascript
<span style={this.styles.primaryColor}>Hello, World!</span>
```

Thanks to [Radium](http://stack.formidable.com/radium/) goodness, you can combine several styles with an array:

Example :

```javascript
<span style={[this.styles.bold, this.styles.italic]}>Hi</span>
```

### Text colors

Convenient styles to define text color (CSS `color` property): `primaryColor`, `darkPrimaryColor`, `lightPrimaryColor`, `accentColor`, `darkAccentColor`, `bodyColor`, `altBodyColor`, `borderColor`, `altBorderColor`, `primaryTextColor`, `secondaryTextColor`, `mutedTextColor`, `inversePrimaryTextColor`, `inverseSecondaryTextColor`, `inverseMutedTextColor`, `errorColor`, `warningColor`.

Example :

```javascript
<span style={[this.styles.warningColor]}>Notice</span>
```

### Background colors

Convenient styles to define background color (CSS `background-color` property): `backgroundPrimaryColor`, `backgroundDarkPrimaryColor`, `backgroundLightPrimaryColor`, `backgroundAccentColor`, `backgroundDarkAccentColor`, `backgroundBodyColor`, `backgroundAltBodyColor`, `backgroundErrorColor`, `backgroundWarningColor`.

Example :

```javascript
<span style={[this.styles.backgroundPrimaryColor]}>Bonjour</span>
```

### Text styling

* `regular`: set `font-weight` to `normal`.
* `bold`: set `font-weight` to `bold`.
* `italic`: set `font-style` to `italic`.
* `mutedText`: set `color` to `mutedTextColor` theme variable.

### Block styling

* `border`: add top, right, bottom and left borders.
* `topBorder`, `rightBorder`, `bottomBorder`, `leftBorder`: add only the corresponding border.
* `rounded`: set `borderRadius` CSS property to `borderRadius` theme variable.

### List styling

* `unstyledList`: remove default HTML list (`ul`, `ol`) styling.

### Responsive tools

* `showIfSmall`/`hideIfSmall`: show/hide an HTML element if the viewport width is less/greater than the `smallBreakpoint` theme variable (*default:* `640px`).
* `showIfMedium`/`hideIfMedium`: show/hide an HTML element if the viewport width is less/greater than the `mediumBreakpoint` theme variable (*default:* `1024px`).
* `showIfLarge`/`hideIfLarge`: show/hide an HTML element if the viewport width is less/greater than the `largeBreakpoint` theme variable (*default:* `1440px`).

### Utilities

* `showIf(condition)`: convenient function to hide an HTML element if `condition` is `false`.
* `hideIf(condition)`: convenient function to hide an HTML element if `condition` is `true`.

### More

Check [styles.js](https://github.com/mvila/radium-starter/blob/master/src/styles.js) for the full set of styles.

### Customization

Pass the `styles` attribute to the `RadiumStarterRoot` component to add new styles or customize the existing ones.

```javascript
<RadiumStarterRoot styles={{ myStyle: { color: '#abc' } }}>
  <Main />
</RadiumStarterRoot>
```

## Enhanced HTML elements

Radium Starter is not a full-featured framework like [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/). It doesn't provide any fancy component like modals or carousels. What Radium Starter does is just enhancing standard HTML elements (`<p>`, `<a>`, `<h1>`, etc.).

Most of the enhancements consist only in CSS styling and you don't have to do anything special to benefit from that, just use regular HTML tags. But sometimes we needed more power control because we wanted to add new attributes to HTML elements or we needed to polyfill inconsistent or missing behaviors in certain browsers (e.g. [Form validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation) in Safari). This is why we created some custom React components that you can use in replacement of the standard HTML elements.

### `<Button>`

Like the HTML `<button>` element but with some useful added attributes:

* `rsSmall`, `rsLarge`: smaller/larger sizes for your controls.
* `rsPrimary`, `rsAccent`: colorize your buttons.

Example:

```javascript
<Button rsLarge rsPrimary>Sign up</Button>
```

### `<Form>`

Use this component in replacement of the HTML `<form>` element to enjoy [Form validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation) in any modern browser (including Safari!).

### `<Input>`, `<Select>`, `<TextArea>`

Augment the corresponding HTML elements with the following attributes:

* `rsSmall`, `rsLarge`: smaller/larger sizes for your input fields.
* `rsAutoSelect`: similar to the `autofocus` HTML attribute but select the content of an input in addition to focusing it.
* `rsCustomValidity`: provide `setCustomValidity()` in a declarative way.

## License

MIT
<!-- contentEnd -->
