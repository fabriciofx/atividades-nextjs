'use client';
import { useState } from 'react';

export default function Contador() {
  const [contagem, setContagem] = useState<number>(0);

  const incrementa = () => {
    setContagem(contagem + 1);
  };

  const decrementa = () => {
    setContagem(contagem - 1);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p>Contagem atual: {contagem}</p>
      <button
        type="button"
        onClick={incrementa}
        style={{ padding: 30, fontSize: 20 }}
      >
        +
      </button>
      <button
        type="button"
        onClick={decrementa}
        style={{ padding: 30, fontSize: 20 }}
      >
        -
      </button>
    </div>
  );
}
