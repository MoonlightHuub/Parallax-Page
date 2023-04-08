import styles from '../styles/index.module.css'
import Container from './container/container'
import { Header, Hero, About, Footer } from '../components/index'

function App() {

  return (
    <Container>
        <Header />
        <div id='home' />
        <Hero />
        <div id='about' className={styles.placeholder} />
        <About />
        <Footer />
    </Container>
  )
}

export default App
