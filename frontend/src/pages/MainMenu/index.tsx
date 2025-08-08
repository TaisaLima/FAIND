import React from "react";
import { useNavigate } from "react-router-dom";


type ProjectStatus = "Pendente" | "Em Progresso" | "Finalizado";

interface Project {
  id: number;
  title: string;
  category: string;
  sentDate: string;
  description: string;
  status: ProjectStatus;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projeto Sistema de Gestão",
    category: "Desenvolvimento Web",
    sentDate: "15 Jan 2025",
    description: "Sistema integrado para gestão empresarial com módulos de RH, Financeiro e Vendas.",
    status: "Pendente",
  },
  {
    id: 2,
    title: "App de Delivery",
    category: "Mobile",
    sentDate: "12 Jan 2025",
    description: "Aplicativo móvel para entrega de produtos com rastreamento em tempo real.",
    status: "Em Progresso",
  },
];

export default function Dashboard() {
  const pendentes = projects.filter(p => p.status === "Pendente").length;
  const emProgresso = projects.filter(p => p.status === "Em Progresso").length;
  const finalizados = 28; // fixo, conforme a imagem
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header amarelo fixo */}
      <header className="bg-yellow-400 text-white flex justify-between items-center px-6 py-3 fixed top-0 left-0 right-0 shadow-md z-10">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 17V9l6-6v12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Painel de Avaliação
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Notificações" className="relative">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Pode colocar um ponto vermelho para notificação */}
          </button>
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar do usuário"
            className="rounded-full w-8 h-8"
          />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="pt-20 max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">Visão Geral</h1>
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
            + Nova Avaliação
          </button>
        </div>

        {/* Barra de pesquisa + filtro */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Pesquisar projetos..."
            className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="flex items-center gap-1 border border-gray-300 rounded px-3 py-2 hover:bg-gray-100 transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4h18M9 12h6M13 20h-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Filtros
          </button>
        </div>

        {/* Cards de status */}
        <div className="flex gap-6 mb-8">
          <div className="flex flex-col flex-1 bg-white rounded shadow p-4">
            <span className="text-gray-500 text-sm">Pendentes</span>
            <span className="text-2xl font-semibold text-gray-900">{pendentes}</span>
            <div className="flex items-center text-gray-400 mt-2 text-sm gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Aguardando avaliação
            </div>
          </div>

          <div className="flex flex-col flex-1 bg-white rounded shadow p-4">
            <span className="text-gray-500 text-sm">Em Progresso</span>
            <span className="text-2xl font-semibold text-gray-900">{emProgresso}</span>
            <div className="flex items-center text-gray-400 mt-2 text-sm gap-1">
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Em andamento
            </div>
          </div>

          <div className="flex flex-col flex-1 bg-white rounded shadow p-4">
            <span className="text-gray-500 text-sm">Finalizados</span>
            <span className="text-2xl font-semibold text-gray-900">{finalizados}</span>
            <div className="flex items-center text-gray-400 mt-2 text-sm gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Avaliações completas
            </div>
          </div>
        </div>

        {/* Projetos para avaliação */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Projetos para Avaliação</h2>

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded shadow p-4 mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center"
            >
              <div>
                <h3 className="text-blue-700 font-semibold cursor-pointer hover:underline">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-1">
                  {project.category} • Enviado em {project.sentDate}
                </p>
                <p className="text-gray-700">{project.description}</p>
              </div>

              <div className="mt-3 sm:mt-0 flex flex-col sm:items-end gap-2">
                <span
                  className={`text-sm px-3 py-1 rounded-full border ${
                    project.status === "Pendente"
                      ? "border-gray-300 text-gray-500"
                      : project.status === "Em Progresso"
                      ? "border-blue-300 text-blue-600"
                      : "border-green-400 text-green-700"
                  }`}
                >
                  {project.status}
                </span>

                <button
                  className="text-blue-700 hover:underline text-sm font-semibold"
                  onClick={ () => navigate("/Forms")}
                >
                  {project.status === "Pendente" ? "Selecionar Projeto" : "Continuar Avaliação"}
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
