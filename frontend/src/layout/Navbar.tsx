import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-indigo-700">GEDAI</div>

      <nav className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-700 font-medium">Dashboard</Link>
        <Link to="/perfil" className="text-gray-700 hover:text-indigo-700 font-medium">Perfil</Link>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
          Sair
        </button>
      </nav>
    </header>
  )
}
