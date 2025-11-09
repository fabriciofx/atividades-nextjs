'use client';

import { useParams } from 'next/navigation';

const Posts = () => {
  const params = useParams();
  return <h1>Acessando o post: {params.id}</h1>;
};

export default Posts;
