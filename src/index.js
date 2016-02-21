'use strict';

import Variables from './variables';
import Elements from './elements';
import Styles from './styles';
import formComponentCreator from './components/form';
import inputComponentCreator from './components/input';
import buttonComponentCreator from './components/button';

export class RadiumStarter {
  constructor(customVars) {
    let vars = new Variables(customVars);

    for (let key of vars.keys()) {
      this[key] = vars[key];
    }

    this.elements = new Elements(vars);

    let styles = new Styles(vars);
    Object.assign(this, styles);

    this.Form = formComponentCreator(vars);
    this.Input = inputComponentCreator(vars);
    this.Button = buttonComponentCreator(vars);
  }
}

export default RadiumStarter;
