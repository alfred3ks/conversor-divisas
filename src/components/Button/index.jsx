import styles from './button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => {
  return (
    <button className={styles['button']} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
