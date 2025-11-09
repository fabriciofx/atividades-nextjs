'use client';

export default function TestErrorPage() {
  const defeito = Math.floor(Math.random() * 2);
  if (defeito) {
    throw new Error('Simulação de erro proposital!');
  }
  return <h1>Load da página ok!</h1>;
}
