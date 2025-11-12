import { createStore } from 'redux';
import { type Carrinho, CarrinhoLivros } from '../models/Carrinho';
import { ESTOQUE, type Item } from '../models/Livraria';

export interface CarrinhoState {
  carrinho: Carrinho;
}

const initialState: CarrinhoState = {
  carrinho: new CarrinhoLivros(ESTOQUE)
};

export type CarrinhoAction =
  | { type: 'ADICIONA'; payload: Item }
  | { type: 'REMOVE'; payload: Item }
  | { type: 'LIMPA' };

function carrinhoReducer(
  state: CarrinhoState = initialState,
  action: CarrinhoAction
): CarrinhoState {
  switch (action.type) {
    case 'ADICIONA':
      return { carrinho: state.carrinho.adiciona(action.payload) };
    case 'REMOVE':
      return { carrinho: state.carrinho.remove(action.payload) };
    case 'LIMPA':
      return { carrinho: state.carrinho.limpa() };
    default:
      return state;
  }
}

export const store = createStore(carrinhoReducer);
export type CarrinhoRootState = ReturnType<typeof store.getState>;
export type CarrinhoDispatch = typeof store.dispatch;
