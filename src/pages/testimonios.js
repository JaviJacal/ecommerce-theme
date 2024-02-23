import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';

import * as styles from './testimonios.module.css';
const TestimoniosPage = (props) => {
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'500px'}
          image={'/BannerTestimonios.jpg'}
          title={`Testimonios`}
        />

        <div className={styles.imageContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
          <img 
            alt={'La oportunidad laboral'}
            src={'/Testimonio1Empresario.png'} 
            style={{ maxWidth: '800px', height: 'auto' }}        
          />
        </div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'justify', marginTop: '10px' }}>
          <p>"Siempre fui escéptico respecto a las lecturas del tarot y la clarividencia, hasta que un día, llevado por la curiosidad y un poco de desesperación, decidí visitar a Ezequiel. Estaba atravesando un momento complicado en mi carrera; sentía que había alcanzado un techo y no veía salida. Ezequiel, con solo echar un vistazo a sus cartas, predijo que estaba a punto de presentarse una oportunidad laboral inesperada, pero que debía ser valiente para tomarla, ya que implicaría un gran cambio. No pasaron ni dos semanas cuando me llegó una oferta de trabajo de otro país, algo que jamás había considerado. Recordando sus palabras, acepté. Hoy, estoy viviendo la mejor etapa de mi vida profesional, en un lugar que nunca imaginé. La precisión de Ezequiel fue asombrosa, y su consejo, invaluable."</p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'right', marginTop: '00px' }}>
          <p>David N.</p>
        </div>
        
        <div className={styles.imageContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
          <img 
            alt={'El Amor Verdadero'}
            src={'/MujerLatina.png'} 
            style={{ maxWidth: '800px', height: 'auto' }}        
          />
        </div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'justify', marginTop: '10px' }}>
          <p>"Nunca olvidaré el día que Ezequiel cambió mi vida amorosa para siempre. Después de varios fracasos sentimentales, había perdido la fe en el amor. Decidí buscar la guía de Ezequiel como último recurso, sin esperar mucho. En su lectura, mencionó que el amor estaba más cerca de lo que pensaba, pero que debía abrir mi corazón y dejar ir el pasado para encontrarlo. Además, especificó que encontraría a esta persona en un lugar relacionado con el arte. Aunque me pareció extraño, decidí asistir a más eventos culturales. Un mes después, en una exposición de fotografía, conocí a Alex. Resultó ser todo lo que Ezequiel había descrito y más. Estamos juntos desde entonces, y nunca he sido más feliz. La precisión de Ezequiel me llevó directo a mi alma gemela."</p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'right', marginTop: '00px' }}>
          <p>Silvia G.</p>
        </div>
        
        <div className={styles.imageContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
          <img 
            alt={'El Accidente Evitado'}
            src={'/HombreMaduro.png'} 
            style={{ maxWidth: '500px', height: 'auto' }}  
          />
        </div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'justify', marginTop: '10px' }}>
          <p>"La lectura de Ezequiel me salvó la vida, literalmente. Durante una consulta casual, una de sus predicciones me dejó helado. Me advirtió sobre un grave peligro en un viaje próximo y me aconsejó posponerlo si era posible. Aunque tenía todo planeado y me costaba creer en su advertencia, algo en su tono me hizo escuchar. Decidí retrasar el viaje. El día que originalmente habría estado volando, el vuelo en el que habría estado se vio involucrado en un accidente. Aunque afortunadamente no hubo víctimas fatales, el susto y la posibilidad de lo que podría haber pasado me persiguen hasta hoy. Estoy eternamente agradecido por la intervención de Ezequiel; su visión me salvó de un destino incierto."</p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'right', marginTop: '00px' }}>
          <p>Jorge R.</p>
        </div>
      </div>
    </Layout>
  );
};

export default TestimoniosPage;
