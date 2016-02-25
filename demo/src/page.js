'use strict';

import React from 'react';
import { RadiumStarter, Form, Input, Button } from '../../src';

@RadiumStarter
export class Page extends React.Component {
  static propTypes = {
    app: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { password: '' };
  }

  switchTheme(event) {
    this.props.app.switchTheme(event.target.value);
  }

  render() {
    let app = this.props.app;
    let s = this.styles;

    let title1 = [
      s.inversePrimaryTextColor,
      s.backgroundPrimaryColor,
      s.regular,
      { padding: '5rem 1.5rem 1rem 1.5rem', marginBottom: '-3rem' }
    ];
    let title2 = [
      s.topBorder,
      { marginTop: '3rem', marginBottom: '1.5rem', paddingTop: '3rem' }
    ];
    let title3 = [
      s.secondaryTextColor,
      { marginTop: '2rem', marginBottom: '1rem' }
    ];

    let passwordCustomValidity;
    if (!this.state.password) {
      passwordCustomValidity = 'Please fill out this field.';
    } else if (this.state.password.length < 8) {
      passwordCustomValidity = 'Use at least 8 characters.';
    } else {
      passwordCustomValidity = '';
    }

    return (
      <div style={{ margin: '1.5rem auto', width: 800 }}>
        <h1 style={title1}>{app.displayName}</h1>

        <h2 style={title2}>Layout</h2>

        <h3 style={title3}>Responsive utilities</h3>
        <p style={[s.hiddenIfSmall]}>hiddenIfSmall</p>
        <p style={[s.shownIfSmall]}>shownIfSmall</p>
        <p style={[s.hiddenIfMedium]}>hiddenIfMedium</p>
        <p style={[s.shownIfMedium]}>shownIfMedium</p>
        <p style={[s.hiddenIfLarge]}>hiddenIfLarge</p>
        <p style={[s.shownIfLarge]}>shownIfLarge</p>

        <h2 style={title2}>Typography</h2>

        <h3 style={title3}>Headings</h3>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <h3 style={title3}>Paragraphs</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet vitae eros vel lacinia. In aliquet dictum nulla a maximus. In dapibus id eros vitae eleifend. Vivamus ac nisl sem. Sed ut erat in ante venenatis mollis non eu ipsum. Morbi fringilla elit sit amet condimentum consectetur. Nulla tempus at ipsum sed congue.</p>
        <p>Maecenas id accumsan sapien, eget consectetur quam. Mauris quis est lorem. Vestibulum quis iaculis velit. Sed in placerat leo. Ut sollicitudin, metus eu eleifend molestie, purus tellus tempor turpis, sit amet dignissim tortor dolor nec dui. Vivamus id ipsum hendrerit sem aliquam viverra ac a diam. Curabitur pellentesque lacus eget ornare sollicitudin. Quisque eget tellus et nisi eleifend ultricies. Suspendisse ullamcorper lectus nulla, at feugiat sem dictum at.</p>

        <h3 style={title3}>Links</h3>
        <p><a href='javascript:alert("Link has been clicked.")'>Click me</a></p>

        <h2 style={title2}>Forms</h2>

        <h3 style={title3}>Buttons</h3>
        <p><Button rsSmall>Small button</Button></p>
        <p><Button>Normal button</Button></p>
        <p><Button rsLarge>Large button</Button></p>
        <p><Button rsPrimary>Primary button</Button></p>
        <p><Button rsAccent>Accent button</Button></p>
        <p><Button disabled>Disabled button</Button></p>
        <p><Button style={[s.primaryColor, { textTransform: 'uppercase' }]}>Custom button</Button></p>

        <h3 style={title3}>Inputs</h3>
        <p><Input type='text' rsSmall defaultValue='Small field' /></p>
        <p><Input type='text' defaultValue='Normal field' /></p>
        <p><Input type='text' rsLarge defaultValue='Large field' /></p>
        <p><Input type='text' disabled defaultValue='Disabled field' /></p>
        <p><Input type='text' readOnly defaultValue='Read only field' /></p>
        <p><Input type='text' placeholder='Placeholder' /></p>
        <p><Input type='text' defaultValue='Custom field' style={s.primaryColor} /></p>
        <p style={{ lineHeight: 1 }}><label><Input type='checkbox' />&nbsp;Checkbox</label></p>
        <p style={{ lineHeight: 1 }}><label><Input type='radio' />&nbsp;Radio button</label></p>

        <h3 style={title3}>Validation</h3>
        <Form onSubmit={() => alert('\'onSubmit\' event has been triggered.')} action='javascript:void(0)'>
          <p><Input type='text' required placeholder='Username' /></p>
          <p><Input type='password' value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} rsCustomValidity={passwordCustomValidity} placeholder='Password' /></p>
          <p><Button type='submit' rsPrimary>Submit</Button></p>
        </Form>

        <h2 style={title2}>Dynamic theming</h2>
        <p style={{ lineHeight: 1 }}><label><Input type='radio' value='default' checked={app.themeName === 'default'} onChange={::this.switchTheme} />&nbsp;Default theme</label></p>
        <p style={{ lineHeight: 1 }}><label><Input type='radio' value='inverse' checked={app.themeName === 'inverse'} onChange={::this.switchTheme} />&nbsp;Inverse theme</label></p>
      </div>
    );
  }
}

export default Page;
