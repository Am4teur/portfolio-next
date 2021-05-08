import { AppProps } from 'next/app';

import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';

import '../styles/globals.scss';

export default function App({ Component, pageProps }:AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
