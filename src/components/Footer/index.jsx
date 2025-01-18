import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles['paragraph']}>
        ©{currentYear} Conversor de Divisas. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
