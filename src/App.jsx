import Conversor from './components/Conversor';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Conversor
        title={'Euro - Dólar'}
        baseCurrency={'EUR'}
        targetCurrency={'USD'}
      />
      <Conversor
        title={'Dolar - Yen'}
        baseCurrency={'USD'}
        targetCurrency={'JPY'}
      />

      <Conversor
        title={'Dolar - Dolar Canada'}
        baseCurrency={'USD'}
        targetCurrency={'CAD'}
      />

      <Conversor
        title={'Dolar - Rupias'}
        baseCurrency={'USD'}
        targetCurrency={'INR'}
      />

      <Conversor
        title={'Dolar - Peso Mexicano'}
        baseCurrency={'USD'}
        targetCurrency={'MXN'}
      />
    </Layout>
  );
};

export default App;
