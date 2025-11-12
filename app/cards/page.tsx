'use client';

import Link from 'next/link';

export default function CardsPage() {
  return (
    <div>
      <p>
        <Link
          href="/card/ana"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Ana
        </Link>
      </p>
      <p>
        <Link
          href="/card/luis"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Luis
        </Link>
      </p>
    </div>
  );
}
