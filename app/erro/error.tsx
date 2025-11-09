'use client';

import { useEffect } from 'react';

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Erro capturado:', error);
  }, [error]);

  return (
    <div
      className="
        flex flex-col items-center justify-center h-screen text-center
        bg-gray-50
      "
    >
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        Oops! Algo deu errado.
      </h2>
      <p className="text-gray-600 mb-6">
        {error.message || 'Ocorreu um erro inesperado.'}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="
          px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700
          transition
        "
      >
        Tentar novamente
      </button>
    </div>
  );
}
