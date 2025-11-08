'use client';

import type { Tarefa } from '../../models/Tarefa';

type ListaTarefasProps = {
  tarefas: Tarefa[];
  remove: (id: number) => void;
  concluida: (tarefa: Tarefa) => void;
};

const ListaTarefas: React.FC<ListaTarefasProps> = ({
  tarefas,
  remove,
  concluida
}) => {
  function handleRemove(tarefa: Tarefa) {
    remove(tarefa.id);
  }

  function handleChecked(tarefa: Tarefa) {
    concluida(tarefa);
  }

  return (
    <div className="flex justify-center mt-8">
      <table className="w-4/5 border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <td className="py-3 px-4 font-semibold">Tarefa</td>
            <td className="py-3 px-4 font-semibold text-center">Concluída</td>
            <td className="py-3 px-4"></td>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa: Tarefa) => (
            <tr
              key={tarefa.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 px-4 text-gray-800">
                {tarefa.concluida ? (
                  <span className="line-through text-gray-400">
                    {tarefa.descricao}
                  </span>
                ) : (
                  tarefa.descricao
                )}
              </td>
              <td className="py-3 px-4 text-center">
                <input
                  type="checkbox"
                  onClick={() => handleChecked(tarefa)}
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                />
              </td>
              <td className="py-3 px-4 text-right">
                <button
                  type="button"
                  onClick={() => handleRemove(tarefa)}
                  className="bg-red-500 text-white px-3 py-1.5 rounded-md text-sm hover:bg-red-600 active:scale-95 transition"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaTarefas;
