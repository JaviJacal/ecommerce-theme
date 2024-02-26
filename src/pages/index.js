import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/tarot1.png'}
        title={'Descubre Tu Destino'}
        subtitle={'Lecturas de Tarot Online para Iluminar Tu Camino Hacia el Futuro'}
        ctaText={'Consulta de tarot con Rada'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        
        <h3>Bienvenido a {' '} <span className={styles.gold}>Tarot con Rada</span></h3>
        <p>Donde cada carta revela un secreto, y cada lectura, un camino hacia la comprensión y el autodescubrimiento. En un mundo lleno de incertidumbres, nuestras lecturas de tarot te ofrecen una <span class="destacado">guía espiritual y respuestas claras</span> a tus dudas más profundas.</p>
        <p>¿Te encuentras en una encrucijada? ¿Buscas comprender mejor tu pasado, presente o futuro? Permítenos acompañarte en este viaje místico hacia la iluminación personal. Con {' '} <span className={styles.gold}>Tarot con Rada</span>, no estás solo en la búsqueda de tu destino.</p>
        <p>Explora las posibilidades, descubre tu verdadero yo y toma las riendas de tu futuro hoy. Emprende este viaje transformador con nosotros y deja que las cartas te guíen hacia los secretos que el universo tiene reservado para ti.</p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Nuestras opciones'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Testimonios'} link={'/shop'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Experiencia'}
            description={`En la esencia de nuestra existencia y en los momentos más críticos de nuestras vidas, a menudo buscamos señales, orientación, un faro que ilumine nuestro camino. Aquí, en el umbral de lo desconocido, es donde Ezequiel, nuestro taroísta experto, se convierte en el guía que muchos han anhelado. Con una sabiduría que trasciende lo ordinario y un don que ha sido afilado a través de años de dedicación, Ezequiel ha sido el artífice detrás de innumerables historias de transformación personal.`}
            textLink={'Conocer más'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={'/tarot_background/t5.PNG'} title={`-50% de descuento \n en la primera lectura`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>Tarot Vida</Link>
          <Link to={'/shop'}>Tarot Espiritual</Link>
          <Link to={'/shop'}>Tarot Decisiones</Link>
          <Link to={'/shop'}>Tarot Relaciones</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Acerca de nosotros'}
        quote={
          '“Creemos en dos pilares fundamentales: la precisión y profundidad de nuestras lecturas de tarot, y el acompañamiento genuino en el viaje espiritual de cada individuo. Con estos principios, el camino hacia el autoconocimiento y la claridad en la vida se despliega ante nosotros.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Blog'} subtitle={'Descubre las perspectivas más impactantes en el universo del tarot.'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Nos dedicamos a ti'}
          subtitle={'Menciona @tarotConRada para destacar en nuestras redes.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
