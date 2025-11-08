'use client';

type FormularioTarefaProps = {
  adiciona: (descricao: string) => void;
};

const FormularioTarefa: React.FC<FormularioTarefaProps> = ({ adiciona }) => {
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget;
    const tarefa = form.elements.namedItem('tarefa') as HTMLInputElement;
    adiciona(tarefa.value);
    tarefa.value = '';
  }

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3 bg-white shadow-lg rounded-xl px-6 py-5 w-full max-w-xl"
      >
        <label
          htmlFor="tarefa"
          className="font-medium text-gray-700 sm:mr-2 w-full sm:w-auto"
        >
          Tarefa:
        </label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        ></input>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:scale-95 transition font-medium"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default FormularioTarefa;
