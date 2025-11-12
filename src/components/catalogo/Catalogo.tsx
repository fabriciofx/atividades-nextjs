import { useDispatch, useSelector } from 'react-redux';
import LivroCard from '@/src/components/livro-card/LivroCard';
import { ESTOQUE } from '@/src/models/Livraria';
import type {
  CarrinhoDispatch,
  CarrinhoRootState
} from '@/src/store/CarrinhoStore';
import CarrinhoView from '../carrinho-view/CarrinhoView';

export default function Catalogo() {
  const carrinho = useSelector((state: CarrinhoRootState) => state.carrinho);
  const dispatch = useDispatch<CarrinhoDispatch>();
  return (
    <div>
      <CarrinhoView carrinho={carrinho} dispatch={dispatch} />
      <div className="flex flex-wrap gap-4 p-4">
        {ESTOQUE.map((item) => (
          <LivroCard
            key={item.livro.id}
            livro={item.livro}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}
