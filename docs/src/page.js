'use strict';

/* eslint-disable react/no-danger */

import React from 'react';
import {Style} from 'radium';
import {RadiumStarter} from '../../src';
import prismStyles from './prism-styles';

@RadiumStarter
export class Page extends React.Component {
  render() {
    const t = this.theme;
    const s = this.styles;

    const menuStyle = [s.unstyledList];

    const menuItemStyle = [s.inlineBlock, s.inversePrimaryTextColor, {marginLeft: '1.3rem'}];

    const menuItemLinkStyle = [s.inversePrimaryTextColor];

    return (
      <div>
        <Style rules={prismStyles(t)} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            padding: '2rem',
            backgroundColor: t.primaryColor
          }}
        >
          <div style={[s.minimumLineHeight, {flexShrink: 0, alignSelf: 'flex-end'}]}>
            <ul style={menuStyle}>
              <li style={menuItemStyle}>
                <a href="#docs" style={menuItemLinkStyle}>
                  Docs
                </a>
              </li>
              <li style={menuItemStyle}>
                <a href="demo/index.html" style={menuItemLinkStyle}>
                  Demo
                </a>
              </li>
              <li style={menuItemStyle}>
                <a href="https://github.com/mvila/radium-starter" style={menuItemLinkStyle}>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              flexGrow: 1,
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src="images/radium-starter-logo.svg"
              alt="Radium Starter"
              style={[{flexGrow: 1, width: '100%', minWidth: 300, maxWidth: 600}]}
            />
          </div>
          <div
            style={[{flexShrink: 0, alignSelf: 'center'}, s.minimumLineHeight, {fontSize: '3rem'}]}
          >
            <a
              href="#docs"
              style={[s.inversePrimaryTextColor, {':hover': {textDecoration: 'none'}}]}
            >
              &#x2304;
            </a>
          </div>
        </div>

        <div
          id="docs"
          dangerouslySetInnerHTML={{__html: window.INJECTED_CONTENT}}
          style={{margin: '0 auto', padding: '2rem 1rem', maxWidth: 800}}
        />
      </div>
    );
  }
}

export default Page;
