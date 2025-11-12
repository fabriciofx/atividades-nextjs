export interface Livro {
  id: number;
  titulo: string;
  preco: number;
}

export interface Item {
  livro: Livro;
  quantidade: number;
}

export const ESTOQUE: Item[] = [
  {
    livro: {
      id: 1,
      titulo: 'Programação com Next.JS',
      preco: 100
    },
    quantidade: 10
  },
  {
    livro: {
      id: 2,
      titulo: 'Programação Orientada a Objetos',
      preco: 120
    },
    quantidade: 20
  },
  {
    livro: {
      id: 3,
      titulo: 'React Fluente',
      preco: 80
    },
    quantidade: 5
  },
  {
    livro: {
      id: 4,
      titulo: 'Angular Fluente',
      preco: 75
    },
    quantidade: 11
  },
  {
    livro: {
      id: 5,
      titulo: 'TypeScript em 21 dias',
      preco: 110
    },
    quantidade: 23
  },
  {
    livro: {
      id: 6,
      titulo: 'JavaScript em 21 dias',
      preco: 120
    },
    quantidade: 12
  }
];
