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
      ;
    </Layout>
  );
};

export default App;
