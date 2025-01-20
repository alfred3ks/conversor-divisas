const fetchExchangeRate = async (baseCurrency, targetCurrency) => {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_API_EXCHANGE_RATE_API_KEY}/${baseCurrency}`
    );
    if (!resp.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    const data = await resp.json();
    const exChangeRate = data.conversion_rates[targetCurrency]; // Devuelve solo la tasa de conversión
    if (!exChangeRate) {
      throw new Error(
        `La tasa de cambio para ${targetCurrency} no esta disponible`
      );
    }

    return exChangeRate;
  } catch (error) {
    console.error(`Error al acceder a la API: ${error}`);
    throw error;
  }
};

export default fetchExchangeRate;
