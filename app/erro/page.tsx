'use client';

export default function TestErrorPage() {
  function defeito(_form: FormData) {
    throw new Error('Mensagem de erro: simulação de erro proposital!');
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form action={defeito}>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white
            font-medium rounded-xl shadow-md transition-all duration-200"
        >
          Simular Erro
        </button>
      </form>
    </div>
  );
}
