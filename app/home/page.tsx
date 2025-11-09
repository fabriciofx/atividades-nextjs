'use client';

import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home!!!</h1>
      <p>
        <Link href="/about">Sobre nós</Link>
      </p>
    </div>
  );
};

export default Home;
