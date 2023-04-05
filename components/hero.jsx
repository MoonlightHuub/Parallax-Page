import styles from '../styles/hero.module.css'
import { images } from '../public/images'
import { useEffect } from 'react'

function Hero() {

  const handleScroll = () => {

    const text = document.querySelector('#text');
    const leaf = document.querySelector('#leaf');
    const hill1 = document.querySelector('#hill1');
    const hill4 = document.querySelector('#hill4');
    const hill5 = document.querySelector('#hill5');

    const value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px'
    leaf.style.left = value * 1.5 + 'px'
    hill5.style.left = value * 1.5 + 'px'
    hill4.style.left = value * -1.5 + 'px'
    hill1.style.top = value * 1 + 'px'
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <h1 className={styles.title} id='text' >
        Parallax Website
      </h1>
      {images.map((e, i) => (
        <img src={e.image} alt={i} key={i} className={`${styles.image} ${e.id == 6 ? styles.pos : ''} ${e.id == 7 ? styles.pos2 : ''}`} id={e.name} />
      ))}

    </section>
  )
}

export default Hero