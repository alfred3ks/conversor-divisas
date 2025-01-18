import { useEffect, useRef, useState } from 'react';
import styles from './conversor.module.css';
import Button from '../Button';

const Conversor = () => {
  // Estado para guardar valores de la API:
  const [valor, setValor] = useState();

  useEffect(() => {
    // funcion asincrona para pedir valor de cambio a la API:
    const getChange = async () => {
      try {
        const resp = await fetch(
          'https://v6.exchangerate-api.com/v6/87cbc480adc2f002888c5036/latest/EUR'
        );
        const data = await resp.json();
        const tasaConvertionUSD = await data.conversion_rates.USD;
        setValor(tasaConvertionUSD);
      } catch (error) {
        console.log(`Error al acceder a la API ${error}`);
      }
    };

    getChange();
  }, []);

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
    outputRef.current.innerHTML = `$${outputValue}`;
  };

  // Función para resetear los valores
  const handleReset = () => {
    inputRef.current.value = ''; // Limpia el valor del input
    outputRef.current.innerHTML = ''; // Limpia el contenido del párrafo
  };

  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>Euro - Dólar</h1>
      <input
        className={styles['input']}
        ref={inputRef}
        type="text"
        placeholder="Introduce la cantidad en €"
      />
      <Button onClick={handleConvert}>Convertir $</Button>
      <Button onClick={handleReset}>Reset</Button>
      <p className={styles['paragraph']} ref={outputRef}></p>
    </div>
  );
};

export default Conversor;
