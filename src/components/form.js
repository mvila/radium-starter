'use strict';

import Radium from 'radium';
import React from 'react';
import clone from 'lodash/clone';

export function formComponentCreator(vars) { // eslint-disable-line no-unused-vars
  return @Radium class From extends React.Component {
    static displayName = 'From';

    constructor(props) {
      super(props);
      this.state = { submitted: false };
    }

    submit(event) {
      if (!this.state.submitted) this.setState({ submitted: true });
      if (event.target.checkValidity) {
        if (!event.target.checkValidity()) { // For Safari
          event.preventDefault();
          return;
        }
      }
      if (this.originalOnSubmit) this.originalOnSubmit(event);
    }

    render() {
      let props = clone(this.props);

      if (props.onSubmit) this.originalOnSubmit = props.onSubmit;
      props.onSubmit = this.submit.bind(this);

      if (this.state.submitted) {
        let className = props.className || '';
        if (className) className += ' ';
        className += 'submitted';
        props.className = className;
      }

      return <form {...props} />;
    }
  };
}

export default formComponentCreator;
