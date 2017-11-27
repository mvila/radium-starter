'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {withRadiumStarter, Form, Input, TextArea, Select, Button} from '../../src';

@withRadiumStarter
export class Page extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
  };

  state = {password: ''};

  switchTheme(event) {
    this.props.app.switchTheme(event.target.value);
  }

  render() {
    const {app, styles: s} = this.props;

    const title1 = [
      s.inversePrimaryTextColor,
      s.backgroundPrimaryColor,
      s.regular,
      {padding: '5rem 1.5rem 1rem 1.5rem', marginBottom: '-3rem'}
    ];
    const title2 = [s.topBorder, {marginTop: '3rem', marginBottom: '1.5rem', paddingTop: '3rem'}];
    const title3 = [s.secondaryTextColor, {marginTop: '2rem', marginBottom: '1rem'}];

    let passwordCustomValidity;
    if (!this.state.password) {
      passwordCustomValidity = 'Please fill out this field.';
    } else if (this.state.password.length < 8) {
      passwordCustomValidity = 'Use at least 8 characters.';
    } else {
      passwordCustomValidity = '';
    }

    return (
      <div style={{margin: '0 auto', padding: '1.5rem', maxWidth: 800}}>
        <h1 style={title1}>
          {app.displayName}{' '}
          <span style={[s.baseFontSize, s.inverseSecondaryTextColor]}>v{app.version}</span>
        </h1>

        <h2 style={title2}>Layout</h2>

        <h3 style={title3}>Responsive utilities</h3>
        <p style={[s.hideIfSmall]}>hideIfSmall</p>
        <p style={[s.showIfSmall]}>showIfSmall</p>
        <p style={[s.hideIfMedium]}>hideIfMedium</p>
        <p style={[s.showIfMedium]}>showIfMedium</p>
        <p style={[s.hideIfLarge]}>hideIfLarge</p>
        <p style={[s.showIfLarge]}>showIfLarge</p>

        <h2 style={title2}>Typography</h2>

        <h3 style={title3}>Headings</h3>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <h3 style={title3}>Texts</h3>
        <h5>Nulla tempus</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet vitae eros vel
          lacinia. In aliquet dictum nulla a maximus. In dapibus id eros vitae eleifend. Vivamus ac
          nisl sem. Sed ut erat in ante venenatis mollis non eu ipsum. Morbi fringilla elit sit amet
          condimentum consectetur. Nulla tempus at ipsum sed congue.
        </p>
        <p>
          Curabitur pellentesque lacus eget ornare sollicitudin. Quisque eget tellus et nisi
          eleifend ultricies. Suspendisse ullamcorper lectus nulla, at feugiat sem dictum at.
        </p>
        <h5>Amet dignissim</h5>
        <p>
          Maecenas id accumsan sapien, eget consectetur quam. Mauris quis est lorem. Vestibulum quis
          iaculis velit. Sed in placerat leo. Ut sollicitudin, metus eu eleifend molestie, purus
          tellus tempor turpis, sit amet dignissim tortor dolor nec dui. Vivamus id ipsum hendrerit
          sem aliquam viverra ac a diam. Curabitur pellentesque lacus eget ornare sollicitudin.
          Quisque eget tellus et nisi eleifend ultricies. Suspendisse ullamcorper lectus nulla, at
          feugiat sem dictum at.
        </p>

        <h3 style={title3}>Links</h3>
        <p>
          {/* eslint-disable no-script-url */}
          <a href="javascript:alert(&quot;Link has been clicked.&quot;)">Click me</a>
          {/* eslint-enable no-script-url */}
        </p>

        <h2 style={title2}>Forms</h2>

        <h3 style={title3}>Buttons</h3>
        <p>
          <Button rsSmall>Small button</Button>
        </p>
        <p>
          <Button>Normal button</Button>
        </p>
        <p>
          <Button rsLarge>Large button</Button>
        </p>
        <p>
          <Button rsPrimary>Primary button</Button>
        </p>
        <p>
          <Button rsAccent>Accent button</Button>
        </p>
        <p>
          <Button disabled>Disabled button</Button>
        </p>
        <p>
          <Button style={[s.primaryColor, {textTransform: 'uppercase'}]}>Custom button</Button>
        </p>

        <h3 style={title3}>Inputs</h3>
        <p>
          <Input type="text" rsSmall defaultValue="Small field" />
        </p>
        <p>
          <Input type="text" defaultValue="Normal field" />
        </p>
        <p>
          <Input type="text" rsLarge defaultValue="Large field" />
        </p>
        <p>
          <Input type="text" disabled defaultValue="Disabled field" />
        </p>
        <p>
          <Input type="text" readOnly defaultValue="Read only field" />
        </p>
        <p>
          <Input type="text" placeholder="Placeholder" />
        </p>
        <p>
          <Input type="text" defaultValue="Custom field" style={s.primaryColor} />
        </p>
        <p>
          <TextArea defaultValue="textarea" cols={40} />
        </p>
        <p>
          <Select>
            <option>Paris</option>
            <option>New York</option>
            <option>Tokyo</option>
          </Select>
        </p>
        <p style={{lineHeight: 1}}>
          <label>
            <Input type="checkbox" />&nbsp;Checkbox
          </label>
        </p>
        <p style={{lineHeight: 1}}>
          <label>
            <Input type="radio" />&nbsp;Radio button
          </label>
        </p>

        <h3 style={title3}>Validation</h3>
        {/* eslint-disable no-script-url,no-alert */}
        <Form
          onSubmit={() => alert('\'onSubmit\' event has been triggered.')}
          action="javascript:void(0)"
        >
          {/* eslint-enable no-script-url,no-alert */}
          <p>
            <Input type="text" required placeholder="Username" />
          </p>
          <p>
            <Input
              type="password"
              value={this.state.password}
              onChange={event => this.setState({password: event.target.value})}
              rsCustomValidity={passwordCustomValidity}
              placeholder="Password"
            />
          </p>
          <p>
            <Button type="submit" rsPrimary>
              Submit
            </Button>
          </p>
        </Form>

        <h2 style={title2}>Dynamic theming</h2>
        <p style={{lineHeight: 1}}>
          <label>
            <Input
              type="radio"
              value="default"
              checked={app.themeName === 'default'}
              onChange={::this.switchTheme}
            />&nbsp;Default theme
          </label>
        </p>
        <p style={{lineHeight: 1}}>
          <label>
            <Input
              type="radio"
              value="inverse"
              checked={app.themeName === 'inverse'}
              onChange={::this.switchTheme}
            />&nbsp;Inverse theme
          </label>
        </p>
      </div>
    );
  }
}

export default Page;
