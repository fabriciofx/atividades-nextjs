'use client';

import { useParams } from 'next/navigation';

export default function Blog() {
  const params = useParams();
  return (
    <h1>
      Acessando a categoria {params.categoria} no post {params.id}
    </h1>
  );
}
