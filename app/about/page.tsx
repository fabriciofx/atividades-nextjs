import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre nós',
  description: 'Este site é sobre aprender a usar o Next.JS'
};

const About = () => {
  return <h1>About!!!</h1>;
};

export default About;
