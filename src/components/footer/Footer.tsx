import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Raj Thakur</div>
      <div className={styles.text}>
        A sample Next JS project by Raj Thakur.
      </div>

    </div>
  )
}

export default Footer