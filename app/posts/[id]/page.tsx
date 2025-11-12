'use client';

import { useParams } from 'next/navigation';

export default function Posts() {
  const params = useParams();
  return <h1>Acessando o post: {params.id}</h1>;
}
