import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.phrase}>2023. © This page was developed by Rodrigo 'Moonlight'.</h3>
      </div>
    </footer>
  )
}

export default Footer