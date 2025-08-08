import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Avaliação Concluída!
        </h1>
        <p className="text-gray-700 mb-6">
          Obrigado por concluir a avaliação. Seus dados foram salvos com sucesso
          e estão prontos para análise.
        </p>

   
        <div className="bg-gray-100 rounded-md p-4 mb-6">
          <p className="font-semibold text-gray-800">Resumo:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Projeto: Aplicativo X</li>
            <li>Pontuação: 95%</li>
            <li>Data de Conclusão: 08/08/2025</li>
          </ul>
        </div>

        <button
          onClick={() => (window.location.href = "/MainMenu")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          Voltar ao Menu
        </button>
      </div>
    </div>
  );
};

