// Next
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// components
import Sidebar from '../components/Sidebar';
import Content from '../components/Content/Content';
import Footer from '../components/Footer';

// styles
import styles from '../styles/Home.module.scss';


export default function Home() {
  
  return (
    <>

    <Head>
      <title>Daniel Castro</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Content/>

    </>
  );
}
