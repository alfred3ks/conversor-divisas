import { useRef } from 'react';
import styles from './conversor.module.css';

const Conversor = () => {
  // Referencias a los elementos input y p
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  // Función que se ejecuta al hacer click en el botón
  const handleConvert = () => {
    const inputValue = parseFloat(inputRef.current.value);

    // Validar que la entrada sea un número
    if (isNaN(inputValue)) {
      outputRef.current.innerHTML =
        '⚠️ Por favor, introduce un valor númerico.';
      return;
    }
    // Validar que la entrada sea un número positivo
    if (inputValue < 0) {
      outputRef.current.innerHTML =
        '⚠️ Por favor, introduce un valor númerico positivo.';
      return;
    }

    // Convertir el valor a dólares y mostrarlo en el párrafo
    const outputValue = (inputValue * 1.08).toFixed(2);
    outputRef.current.innerHTML = `$${outputValue}`;
  };

  // Función para resetear los valores
  const handleReset = () => {
    inputRef.current.value = ''; // Limpia el valor del input
    outputRef.current.innerHTML = ''; // Limpia el contenido del párrafo
  };

  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>Conversor Euro - Dólar</h1>
      <input
        className={styles['input']}
        ref={inputRef}
        type="text"
        placeholder="Introduce la cantidad en €"
      />
      <button className={styles['button']} onClick={handleConvert}>
        Convertir $
      </button>
      <button className={styles['button']} onClick={handleReset}>
        Reset
      </button>
      <p className={styles['paragraph']} ref={outputRef}></p>
    </div>
  );
};

export default Conversor;
