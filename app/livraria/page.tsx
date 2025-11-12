'use client';

import { Provider } from 'react-redux';
import { store } from '@/src/store/CarrinhoStore';
import Catalogo from '../../src/components/catalogo/Catalogo';

export default function LivrariaPage() {
  return (
    <Provider store={store}>
      <Catalogo />
    </Provider>
  );
}
