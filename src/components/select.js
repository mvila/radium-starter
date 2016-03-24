'use strict';

import Control from './control';

export class Select extends Control {
  static tagName = 'select';

  createActualProps(props) {
    let actualProps = super.createActualProps(props);

    actualProps.style.push({
      paddingRight: '24px',
      verticalAlign: 'middle',
      backgroundImage: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 8px center',
      backgroundSize: '8px 10px',
      MozAppearance: 'none',
      WebkitAppearance: 'none'
    });

    return actualProps;
  }
}

export default Select;
