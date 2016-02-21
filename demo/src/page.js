'use strict';

import React from 'react';
import Radium from 'radium';
import { Form, Input, Button } from '../../src';

@Radium
export class Page extends React.Component {
  static contextTypes = {
    styles: React.PropTypes.object.isRequired
  };

  render() {
    let { styles } = this.context;

    let title1 = [
      styles.primaryTextColorForDarkBackground,
      styles.backgroundPrimaryColor,
      styles.regular,
      { padding: '5rem 1.5rem 1rem 1.5rem', marginBottom: '-3rem' }
    ];
    let title2 = [
      styles.topBorder,
      { marginTop: '3rem', marginBottom: '1.5rem', paddingTop: '3rem' }
    ];
    let title3 = [
      styles.secondaryTextColor,
      { marginTop: '2rem', marginBottom: '1rem' }
    ];

    return (
      <div style={{ margin: '1.5rem auto', width: 800 }}>
        <h1 style={title1}>Radium Starter Demo</h1>

        <h2 style={title2}>Layout</h2>

        <h3 style={title3}>Responsive utilities</h3>
        <p style={[styles.hiddenIfSmall]}>hiddenIfSmall</p>
        <p style={[styles.shownIfSmall]}>shownIfSmall</p>
        <p style={[styles.hiddenIfMedium]}>hiddenIfMedium</p>
        <p style={[styles.shownIfMedium]}>shownIfMedium</p>
        <p style={[styles.hiddenIfLarge]}>hiddenIfLarge</p>
        <p style={[styles.shownIfLarge]}>shownIfLarge</p>

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
        <p><Button small>Small button</Button></p>
        <p><Button>Normal button</Button></p>
        <p><Button large>Large button</Button></p>
        <p><Button primary>Primary button</Button></p>
        <p><Button accent>Accent button</Button></p>
        <p><Button disabled>Disabled button</Button></p>
        <p><Button style={[styles.primaryColor, { textTransform: 'uppercase' }]}>Custom button</Button></p>

        <h3 style={title3}>Inputs</h3>
        <p><Input type='text' small defaultValue='Small field' /></p>
        <p><Input type='text' defaultValue='Normal field' /></p>
        <p><Input type='text' large defaultValue='Large field' /></p>
        <p><Input type='text' disabled defaultValue='Disabled field' /></p>
        <p><Input type='text' readOnly defaultValue='Read only field' /></p>
        <p><Input type='text' placeholder='Placeholder' /></p>
        <p><Input type='text' defaultValue='Custom field' style={styles.primaryColor} /></p>
        <p style={{ lineHeight: 1 }}><label><Input type='checkbox' />&nbsp;&nbsp;Checkbox</label></p>
        <p style={{ lineHeight: 1 }}><label><Input type='radio' />&nbsp;&nbsp;Radio button</label></p>

        <h3 style={title3}>Validation</h3>
        <Form onSubmit={() => alert('\'onSubmit\' event has been triggered.')} action='javascript:void(0)'>
          <p><Input type='text' required placeholder='Username' /></p>
          <p><Input type='password' required placeholder='Password' /></p>
          <p><Button type='submit' primary>Submit</Button></p>
        </Form>
      </div>
    );
  }
}

export default Page;
