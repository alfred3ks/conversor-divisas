import Header from '../Header';
import Footer from '../Footer';
import styles from './layout.module.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className={styles['layout']}>
      <Header>Este es el componente header</Header>
      <main className={styles['content']}>{children}</main>
      <Footer>Este seria el componente footer</Footer>
    </div>
  );
};

export default Layout;
