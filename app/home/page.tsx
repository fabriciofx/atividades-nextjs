'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home!!!</h1>
      <p>
        <Link
          href="/about"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Sobre nós
        </Link>
      </p>
    </div>
  );
}
