'use strict';

import Variables from './variables';
import Elements from './elements';
import Styles from './styles';
import buttonComponentCreator from './components/button';
import inputComponentCreator from './components/input';

class RadiumStarter {
  constructor(customVars) {
    let vars = new Variables(customVars);

    for (let key of vars.keys()) {
      this[key] = vars[key];
    }

    this.elements = new Elements(vars);

    let styles = new Styles(vars);
    Object.assign(this, styles);

    this.Button = buttonComponentCreator(vars);
    this.Input = inputComponentCreator(vars);
  }
}

export default RadiumStarter;
