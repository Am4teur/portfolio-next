// components
import Content from '../components/Content/Content';
import Meta from '../components/Meta';
import ToTop from '../components/ToTop';


// styles
import styles from '../styles/Layout.module.scss';


export default function Home() {
  return (
    <>
      <Meta title="Daniel Castro - Home"/>
      <Content/>
      <ToTop/>
    </>
  );
}
