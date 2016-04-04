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

Modern browsers and IE11+.

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

## TODO

* Complete documentation

## License

MIT
