import { useEffect, useRef, useState } from 'react';
import styles from './conversor.module.css';
import Button from '../Button';

import fetchExchangeRate from '../../api/fetchExchangeRate';

const Conversor = ({ title, baseCurrency, targetCurrency }) => {
  // Estado para guardar valores de la API:
  const [valor, setValor] = useState();

  useEffect(() => {
    // funcion asincrona para pedir valor de cambio a la API:
    const getChange = async () => {
      try {
        const tasaDeConversion = await fetchExchangeRate(
          baseCurrency,
          targetCurrency
        );
        setValor(tasaDeConversion);
      } catch (error) {
        console.log(`Error al obtener la tasa de conversion ${error}`);
        throw error;
      }
    };
    getChange();
  }, [baseCurrency, targetCurrency]);

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
    const outputValue = (inputValue * valor).toFixed(2);
    outputRef.current.innerHTML = `${outputValue} - ${targetCurrency}`;
  };

  // Función para resetear los valores
  const handleReset = () => {
    inputRef.current.value = ''; // Limpia el valor del input
    outputRef.current.innerHTML = ''; // Limpia el contenido del párrafo
  };

  const placeHolder = `Introduce la cantidad de ${baseCurrency}`;

  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>{title}</h1>
      <input
        className={styles['input']}
        ref={inputRef}
        type="text"
        placeholder={placeHolder}
      />
      <Button onClick={handleConvert}>Convertir {targetCurrency}</Button>
      <Button onClick={handleReset}>Reset</Button>
      <p className={styles['paragraph']} ref={outputRef}></p>
    </div>
  );
};

export default Conversor;
