import styles from '../styles/header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.title}>
          Parallax
        </h1>
      </div>
      <div className={styles.nav}>
        <a href="#home"><p className={styles.link}>Home</p></a>
        <a href="#about"><p className={styles.link}>About</p></a>
      </div>
    </header>
  )
}

export default Header