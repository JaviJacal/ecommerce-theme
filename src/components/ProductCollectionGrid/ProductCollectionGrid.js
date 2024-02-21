import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/tarot_background/t1.PNG'}
        title={'Consulta Tarot Vida'}
        text={'¿Te preguntas sobre tu propósito o el próximo gran paso en tu vida? Nuestras lecturas de Tarot Vida pueden proporcionarte claridad y dirección. Permítenos ayudarte a entender las lecciones del pasado, vivir plenamente el presente y recibir con confianza lo que te depara el futuro.'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/tarot_background/t2.PNG'}
        title={'Consulta Tarot Espiritual'}
        text={'¿Sientes una conexión perdida o deseas profundizar en tu crecimiento espiritual? Explora tu yo interior y las energías que te rodean con una lectura de Tarot Espiritual. Averigua cómo puedes alinear tu ser con el cosmos.'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/tarot_background/t3.PNG'}
        title={'Consulta Tarot Decisiones'}
        text={'¿Te enfrentas a una elección difícil? Permítenos iluminar los caminos potenciales con nuestra lectura de Tarot Decisiones. Te ofrecemos perspectivas para que tomes decisiones informadas que resuenen con tu verdadero ser.'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/tarot_background/t4.PNG'}
        title={'Consulta Tarot Relaciones'}
        text={'¿Deseas mejorar tus relaciones o encontrar el amor verdadero? Nuestras lecturas de Tarot Relaciones pueden revelar los aspectos clave de tus conexiones interpersonales y cómo nutrirlas para un futuro armonioso.'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
