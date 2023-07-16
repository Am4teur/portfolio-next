import Head from 'next/head';

const CustomMeta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/images/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

CustomMeta.defaultProps = {
  title: 'Daniel Castro',
  keywords: 'portfolio',
  description: 'Have a look at Daniel Castro portfolio website!',
};

export default CustomMeta;
