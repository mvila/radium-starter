'use strict';

import Control from './control';

export class Input extends Control {
  static tagName = 'input';

  // === DOM element properties and methods ===

  get checked() {
    return this.domElement.checked;
  }

  set checked(val) {
    this.domElement.checked = val;
    return val;
  }

  get files() {
    return this.domElement.files;
  }

  get valueAsDate() {
    return this.domElement.valueAsDate;
  }

  set valueAsDate(val) {
    this.domElement.valueAsDate = val;
    return val;
  }

  get valueAsNumber() {
    return this.domElement.valueAsNumber;
  }

  set valueAsNumber(val) {
    this.domElement.valueAsNumber = val;
    return val;
  }

  click() {
    this.domElement.click();
  }
}

export default Input;
