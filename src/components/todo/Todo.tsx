'use client';

import { useState } from 'react';
import type { Tarefa } from '@/src/models/Tarefa';
import FormularioTarefa from './FormularioTarefa';
import ListaTarefas from './ListaTarefas';

const Todo: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adiciona = (descricao: string): void => {
    const tarefa = {
      id: Date.now(),
      descricao: descricao,
      concluida: false
    };
    setTarefas([...tarefas, tarefa]);
  };

  const remove = (id: number): void => {
    const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  };

  const concluida = (tarefa: Tarefa): void => {
    tarefa.concluida = !tarefa.concluida;
    setTarefas([...tarefas]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-8">
      <FormularioTarefa adiciona={adiciona} />
      <ListaTarefas tarefas={tarefas} remove={remove} concluida={concluida} />
    </div>
  );
};

export default Todo;
