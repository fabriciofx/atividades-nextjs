import Link from 'next/link';

export default function AtividadesPage() {
  return (
    <div className="space-y-2">
      <p>
        <Link
          href="/contador"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Calculadora de Contagem de Cliques
        </Link>
      </p>
      <p>
        <Link
          href="/todo"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Lista de Tarefas Interativa
        </Link>
      </p>
      <p>
        <Link
          href="/home"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Home
        </Link>
      </p>
      <p>
        <Link
          href="/about"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - About
        </Link>
      </p>
      <p>
        <Link
          href="/posts/1"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js -
          Roteamento Dinâmico
        </Link>
      </p>
      <p>
        <Link
          href="/blog/tech/1"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Rotas
          Aninhadas
        </Link>
      </p>
      <p>
        <Link
          href="/rota-nao-existente"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Página
          de Erro 404
        </Link>
      </p>
      <p>
        <Link
          href="/about"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Arquivo
          Layout
        </Link>
      </p>
      <p>
        <Link
          href="/blog/tech/1"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Layouts
          Aninhados
        </Link>
      </p>
      <p>
        <Link
          href="/about"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Título e
          Metadados
        </Link>
      </p>
      <p>
        <Link
          href="/home"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js -
          Componente Link
        </Link>
      </p>
      <p>
        <Link
          href="/home"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Links
          Ativos com 'use client'
        </Link>
      </p>
      <p>
        <Link
          href="/blog/tech/1"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Template
          vs Layout
        </Link>
      </p>
      <p>
        <Link
          href="/login"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Login
        </Link>
      </p>
      <p>
        <Link
          href="/register"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js - Register
        </Link>
      </p>
      <p>
        <Link
          href="/erro"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Explorando o Roteamento e a Estrutura de Projeto no Next.js -
          Manipulação de Erros
        </Link>
      </p>
      <p>
        <Link
          href="/card"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Criando um Componente Reutilizável com Props
        </Link>
      </p>
      <p>
        <Link
          href="/permission"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Implementando um Higher-Order Component (HOC) de Autorização
        </Link>
      </p>
      <p>
        <Link
          href="/livraria"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Implementar Redux para Carrinho de Compras
        </Link>
      </p>
    </div>
  );
}
