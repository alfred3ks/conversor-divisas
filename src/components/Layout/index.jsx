import Header from '../Header';
import Footer from '../Footer';
import styles from './layout.module.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className={styles['layout']}>
      <Header title={'Conversor de divisas'} />
      <main className={styles['content']}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
