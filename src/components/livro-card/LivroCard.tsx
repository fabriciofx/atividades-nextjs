'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Livro } from '@/src/models/Livraria';
import type { CarrinhoDispatch } from '@/src/store/CarrinhoStore';

type LivroCardProps = {
  livro: Livro;
  dispatch: CarrinhoDispatch;
};

export default function LivroCard({ livro, dispatch }: LivroCardProps) {
  const [quantidade, setQuantidade] = useState(1);
  return (
    <article
      className="
        w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl
        transition-transform hover:-translate-y-1
      "
    >
      <div className="relative aspect-[4/3] bg-indigo-50">
        <Image src="/livro.png" alt="Livro" width="400" height="300" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{livro.titulo}</h3>
          </div>
        </div>
        <div className="flex items-baseline gap-3">
          <p className="text-lg font-extrabold text-slate-900">
            R$ {livro.preco}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center bg-slate-100 rounded-xl px-2">
            <button
              type="button"
              className="px-2 py-1 font-bold text-slate-700"
              onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
            >
              −
            </button>
            <input
              type="number"
              value={quantidade}
              min={1}
              readOnly
              className="
                w-10 text-center bg-transparent font-semibold text-slate-900
              "
            />
            <button
              type="button"
              className="px-2 py-1 font-bold text-slate-700"
              onClick={() => setQuantidade((q) => q + 1)}
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: 'ADICIONA',
                payload: { livro: livro, quantidade: quantidade }
              })
            }
            className="
              flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white
              px-4 py-2 rounded-xl font-semibold transition
            "
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
