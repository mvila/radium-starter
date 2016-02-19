'use strict';

import React from 'react';
import Radium from 'radium';
import s from './styles';

@Radium
export class Page extends React.Component {
  render() {
    let title1 = [
      s.secondaryColor
    ];
    let title2 = [
      s.topBorder,
      { marginTop: '4rem', marginBottom: '2rem', paddingTop: '4rem' }
    ];
    let title3 = [
      s.lightGray,
      { marginTop: '3rem', marginBottom: '1.5rem' }
    ];

    return (
      <div style={{ margin: '1rem auto', width: 800 }}>
        <h1 style={title1}>RadiumStarter Demo</h1>

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

        <h2 style={title2}>Forms</h2>

        <h3 style={title3}>Buttons</h3>
        <p><s.Button size='small'>Small button</s.Button></p>
        <p><s.Button>Normal button</s.Button></p>
        <p><s.Button size='large'>Large button</s.Button></p>
        <p><s.Button primary>Primary button</s.Button></p>
        <p><s.Button secondary>Secondary button</s.Button></p>
        <p><s.Button disabled>Disabled button</s.Button></p>
        <p><s.Button style={[s.primaryColor, { textTransform: 'uppercase' }]}>Custom button</s.Button></p>

        <h3 style={title3}>Inputs</h3>
        <p><s.Input type='text' size='small' defaultValue='Small field' /></p>
        <p><s.Input type='text' defaultValue='Normal field' /></p>
        <p><s.Input type='text' size='large' defaultValue='Large field' /></p>
        <p><s.Input type='text' disabled defaultValue='Disabled field' /></p>
        <p><s.Input type='text' readOnly defaultValue='Read only field' /></p>
        <p><s.Input type='text' placeholder='Placeholder' /></p>
        <p><s.Input type='text' defaultValue='Custom field' style={s.secondaryColor} /></p>
        <p style={{ lineHeight: 1 }}><label><s.Input type='checkbox' />&nbsp;&nbsp;Checkbox</label></p>
        <p style={{ lineHeight: 1 }}><label><s.Input type='radio' />&nbsp;&nbsp;Radio button</label></p>
      </div>
    );
  }
}

export default Page;
