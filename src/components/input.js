'use strict';

import Control from './control';

export class Input extends Control {
  static tagName = 'input';

  // === DOM element properties and methods ===

  get checked() {
    return this.domElement.checked;
  }
  set checked(val) {
    return this.domElement.checked = val;
  }

  get files() {
    return this.domElement.files;
  }

  get valueAsDate() {
    return this.domElement.valueAsDate;
  }
  set valueAsDate(val) {
    return this.domElement.valueAsDate = val;
  }

  get valueAsNumber() {
    return this.domElement.valueAsNumber;
  }
  set valueAsNumber(val) {
    return this.domElement.valueAsNumber = val;
  }

  click() {
    this.domElement.click();
  }
}

export default Input;
