// components
import About    from './About';
import Blog     from './Blog';
import Projects from './Projects';
import Contact  from './Contact';
import Section  from '../Section';

export default function Content() {
  return (
    <>
      <About />
      <Section delay={2}>
        <p>hey hey</p>
      </Section>
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}
