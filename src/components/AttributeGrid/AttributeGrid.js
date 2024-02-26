import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'earth'}
        title={'Consulta desde cualquier parte'}
        // subtitle={'Click to learn more'}
      />
      <Attribute
        icon={'creditcard'}
        title={'Pago seguro'}
        //subtitle={'Shop safely'}
      />
      <Attribute
        icon={'heart'}
        title={'Satisfacción garantizada'}
        //subtitle={'Shop safely'}
      />
    </div>
  );
};

export default AttributeGrid;
