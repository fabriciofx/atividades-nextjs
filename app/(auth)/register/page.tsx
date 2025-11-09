export default function RegisterPage() {
  return (
    <div
      className="
        flex items-center justify-center min-h-screen bg-gradient-to-br
        from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800
      "
    >
      <form
        method="post"
        className="
          bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-sm
          flex flex-col gap-4 border border-gray-100 dark:border-gray-700
        "
      >
        <h1
          className="
          text-2xl font-semibold text-center text-gray-800 dark:text-gray-100
          mb-4
          "
        >
          Crie sua conta de usuário
        </h1>
        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="text-gray-700 dark:text-gray-300 mb-1 font-medium"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="
              px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
              focus:ring-2 focus:ring-blue-500 focus:outline-none
              bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100
              transition
            "
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-gray-700 dark:text-gray-300 mb-1 font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="
              px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
              focus:ring-2 focus:ring-blue-500 focus:outline-none
              bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100
              transition
            "
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="repassword"
            className="text-gray-700 dark:text-gray-300 mb-1 font-medium"
          >
            Repita o password
          </label>
          <input
            type="password"
            id="repassword"
            name="repassword"
            className="
              px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
              focus:ring-2 focus:ring-blue-500 focus:outline-none
              bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100
              transition
            "
          />
        </div>
        <button
          type="submit"
          className="
            mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold
            py-2 rounded-lg shadow-md transition-all duration-300
            hover:shadow-lg
          "
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
