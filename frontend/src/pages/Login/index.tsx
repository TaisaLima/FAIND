import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", { email, senha })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-black">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-green-600">GEDAI</h1>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
