'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Carrinho } from '@/src/models/Carrinho';
import type { Item } from '@/src/models/Livraria';
import type { CarrinhoDispatch } from '@/src/store/CarrinhoStore';

type CarrinhoViewProps = {
  carrinho: Carrinho;
  dispatch: CarrinhoDispatch;
};

export default function CarrinhoView({
  carrinho,
  dispatch
}: CarrinhoViewProps) {
  const [aberto, setAberto] = useState(false);

  const handleAdd = (item: Item) => {
    dispatch({
      type: 'ADICIONA',
      payload: { livro: item.livro, quantidade: 1 }
    });
  };

  const handleRemove = (item: Item) => {
    dispatch({
      type: 'REMOVE',
      payload: { livro: item.livro, quantidade: 1 }
    });
  };

  return (
    <div className="flex flex-col items-end cursor-pointer">
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="flex flex-col items-end cursor-pointer focus:outline-none"
        aria-label="Abrir carrinho"
      >
        <Image
          src="/carrinho.png"
          alt="Carrinho"
          width="48"
          height="48"
          className="object-contain"
        />
        <p className="text-sm mt-1">Itens: {carrinho.contagem()}</p>
        <p className="text-sm mt-1">Total: R$ {carrinho.total().toFixed(2)}</p>
      </button>
      {aberto && (
        <button
          type="button"
          onClick={() => setAberto(false)}
          aria-label="Fechar carrinho"
          className="fixed inset-0 z-40 cursor-default bg-transparent"
        />
      )}
      <aside
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl border-l
          border-gray-200 transform transition-transform duration-300 z-50 ${
            aberto ? 'translate-x-0' : 'translate-x-full pointer-events-none'
          }`}
      >
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Seu carrinho</h2>
          <button
            type="button"
            className="
              text-gray-600 hover:text-black text-xl focus:outline-none
            "
            onClick={() => setAberto(false)}
            aria-label="Fechar painel"
          >
            ✕
          </button>
        </header>
        <section className="flex-1 overflow-y-auto p-4 space-y-3">
          {carrinho.contagem() === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio</p>
          ) : (
            carrinho.itens().map((item) => (
              <div
                key={item.livro.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.livro.titulo}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantidade}x R$ {item.livro.preco.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() => handleRemove(item)}
                      className="
                        px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm
                        font-bold
                      "
                      aria-label="Remover um item"
                    >
                      −
                    </button>
                    <span className="text-sm">{item.quantidade}</span>
                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className="
                        px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm
                        font-bold
                      "
                      aria-label="Adicionar um item"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-semibold text-right">
                  R$ {(item.livro.preco * item.quantidade).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </section>
        <footer className="border-t p-4">
          <p className="font-semibold mb-2">
            Total: R$ {carrinho.total().toFixed(2)}
          </p>
          <button
            type="button"
            className="
              w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700
              transition focus:outline-none
            "
          >
            Finalizar compra
          </button>
        </footer>
      </aside>
    </div>
  );
}
