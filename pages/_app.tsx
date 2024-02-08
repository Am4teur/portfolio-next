import Layout from '../components/Layout';

import '@styles/globals.scss';

// TODO fix this AppProps after converting to next13
const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
