import styles from './header.module.css';
const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['title']}>Conversor de Divisas</h1>
    </header>
  );
};

export default Header;
