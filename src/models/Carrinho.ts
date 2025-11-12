import type { Item } from './Livraria';

export interface Carrinho {
  itens(): ReadonlyArray<Item>;
  adiciona(item: Item): Carrinho;
  remove(item: Item): Carrinho;
  limpa(): Carrinho;
  contagem(): number;
  total(): number;
}

export class CarrinhoLivros implements Carrinho {
  private readonly estoque: Item[];
  private readonly array: Item[];

  constructor(estoque: Item[], itens: Item[] = []) {
    this.estoque = estoque;
    this.array = [...itens];
  }

  itens(): ReadonlyArray<Item> {
    return this.array;
  }

  adiciona(item: Item): Carrinho {
    const encontrado = this.array.filter(
      (cur) => cur.livro.id === item.livro.id
    );
    if (encontrado.length <= 0) {
      return new CarrinhoLivros(this.estoque, [...this.array, item]);
    }
    const diff = this.array.filter((cur) => cur.livro.id !== item.livro.id);
    const quantidade = encontrado[0].quantidade + item.quantidade;
    const max = this.estoque.filter(
      (itm) => itm.livro.id === encontrado[0].livro.id
    );
    if (quantidade <= max[0].quantidade) {
      return new CarrinhoLivros(this.estoque, [
        ...diff,
        {
          livro: encontrado[0].livro,
          quantidade: quantidade
        }
      ]);
    } else {
      return this;
    }
  }

  remove(item: Item): Carrinho {
    const encontrado = this.array.filter(
      (cur) => cur.livro.id === item.livro.id
    );
    if (encontrado.length <= 0) {
      return this;
    }
    const diff = this.array.filter((cur) => cur.livro.id !== item.livro.id);
    const quantidade = encontrado[0].quantidade - item.quantidade;
    if (quantidade <= 0) {
      return new CarrinhoLivros(this.estoque, diff);
    } else {
      const diff = this.array.filter((cur) => cur.livro.id !== item.livro.id);
      return new CarrinhoLivros(this.estoque, [
        ...diff,
        {
          livro: encontrado[0].livro,
          quantidade: quantidade
        }
      ]);
    }
  }

  limpa(): Carrinho {
    return new CarrinhoLivros(this.estoque, []);
  }

  contagem(): number {
    return this.array.reduce((total, item) => total + item.quantidade, 0);
  }

  total(): number {
    return this.array.reduce(
      (total, item) => total + item.quantidade * item.livro.preco,
      0
    );
  }
}
