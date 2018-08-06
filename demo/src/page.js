'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import RadiumStarter, {Form, Input, TextArea, Select, Button} from '../../src';

export class Page extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired
  };

  state = {password: ''};

  switchTheme(event) {
    this.props.app.switchTheme(event.target.value);
  }

  render() {
    return (
      <RadiumStarter>
        {(t, s) => {
          const {app} = this.props;

          const title1 = [
            s.inverseTextColor,
            s.backgroundPrimaryColor,
            s.regular,
            {padding: '5rem 1.5rem 1rem 1.5rem', marginBottom: '-3rem'}
          ];
          const title2 = [
            s.topBorder,
            {marginTop: '3rem', marginBottom: '1.5rem', paddingTop: '3rem'}
          ];
          const title3 = [s.altTextColor, {marginTop: '2rem', marginBottom: '1rem'}];

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
                <span style={[s.baseFontSize, s.inverseAltTextColor]}>v{app.version}</span>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet vitae eros
                vel lacinia. In aliquet dictum nulla a maximus. In dapibus id eros vitae eleifend.
                Vivamus ac nisl sem. Sed ut erat in ante venenatis mollis non eu ipsum. Morbi
                fringilla elit sit amet condimentum consectetur. Nulla tempus at ipsum sed congue.
              </p>
              <p>
                Curabitur pellentesque lacus eget ornare sollicitudin. Quisque eget tellus et nisi
                eleifend ultricies. Suspendisse ullamcorper lectus nulla, at feugiat sem dictum at.
              </p>
              <h5>Amet dignissim</h5>
              <p>
                Maecenas id accumsan sapien, eget consectetur quam. Mauris quis est lorem.
                Vestibulum quis iaculis velit. Sed in placerat leo. Ut sollicitudin, metus eu
                eleifend molestie, purus tellus tempor turpis, sit amet dignissim tortor dolor nec
                dui. Vivamus id ipsum hendrerit sem aliquam viverra ac a diam. Curabitur
                pellentesque lacus eget ornare sollicitudin. Quisque eget tellus et nisi eleifend
                ultricies. Suspendisse ullamcorper lectus nulla, at feugiat sem dictum at.
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
                <Button style={[s.primaryColor, {textTransform: 'uppercase'}]}>
                  Custom button
                </Button>
              </p>
              <p style={{padding: '1rem', backgroundColor: t.inverseBackgroundColor}}>
                <Button rsInverse>Inverse button</Button>
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
                <Input id="checkbox" type="checkbox" />
                &nbsp;
                <label htmlFor="checkbox" style={{verticalAlign: 'middle'}}>
                  Checkbox
                </label>
              </p>
              <p style={{lineHeight: 1}}>
                <Input id="radio" type="radio" />
                &nbsp;
                <label htmlFor="radio" style={{verticalAlign: 'middle'}}>
                  Radio button
                </label>
              </p>
              <div style={{padding: '1rem', backgroundColor: t.inverseBackgroundColor}}>
                <p>
                  <Input type="text" rsInverse defaultValue="Inverse field" />
                </p>
                <p>
                  <TextArea rsInverse defaultValue="Inverse textarea" cols={40} />
                </p>
                <p style={s.noMargins}>
                  <Select rsInverse>
                    <option>Paris</option>
                    <option>New York</option>
                    <option>Tokyo</option>
                  </Select>
                </p>
              </div>

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
                <Input
                  id="radio-default"
                  type="radio"
                  value="default"
                  checked={app.themeName === 'default'}
                  onChange={::this.switchTheme}
                />
                &nbsp;
                <label htmlFor="radio-default" style={{verticalAlign: 'middle'}}>
                  Default theme
                </label>
              </p>
              <p style={{lineHeight: 1}}>
                <Input
                  id="radio-inverse"
                  type="radio"
                  value="inverse"
                  checked={app.themeName === 'inverse'}
                  onChange={::this.switchTheme}
                />
                &nbsp;
                <label htmlFor="radio-inverse" style={{verticalAlign: 'middle'}}>
                  Inverse theme
                </label>
              </p>
            </div>
          );
        }}
      </RadiumStarter>
    );
  }
}

export default Page;
