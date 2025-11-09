'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <html lang="pt-BR">
      <head>
        <title>Oops...</title>
      </head>
      <body>
        <div
          className="
            flex flex-col items-center justify-center h-screen text-center
            bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900
            dark:to-gray-800 transition-colors
          "
        >
          <motion.div
            className="mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{
              y: [0, -10, 0],
              opacity: 1
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="180"
              height="180"
            >
              <title id="astronaut-title">
                Ilustração de um astronauta flutuando no espaço
              </title>
              <circle cx="250" cy="250" r="200" fill="#eff6ff" />
              <g transform="translate(100,80)">
                <circle cx="150" cy="150" r="80" fill="#60a5fa" />
                <circle cx="150" cy="150" r="55" fill="#bfdbfe" />
                <rect
                  x="140"
                  y="230"
                  width="20"
                  height="60"
                  rx="10"
                  fill="#3b82f6"
                />
                <path
                  d="M120 280 Q150 320 180 280"
                  stroke="#60a5fa"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
              <circle cx="350" cy="200" r="12" fill="#3b82f6" />
              <circle cx="380" cy="230" r="8" fill="#93c5fd" />
            </svg>
          </motion.div>
          <motion.h1
            className="
              text-7xl font-extrabold text-blue-600 dark:text-blue-400 mb-2
            "
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="
              text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2
            "
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Página não encontrada
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400 mb-8 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Parece que você se perdeu no espaço. A página que você procura não
            existe ou foi movida.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/home"
              className="
                inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3
                rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg
                transition-all
              "
            >
              Voltar para a Home
            </Link>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
