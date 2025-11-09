'use client';

import { useParams } from 'next/navigation';

const Blog = () => {
  const params = useParams();
  return (
    <h1>
      Acessando a categoria {params.categoria} no post {params.id}
    </h1>
  );
};

export default Blog;
