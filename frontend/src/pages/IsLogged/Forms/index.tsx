import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { SliderInput } from "/src/components/forms/SliderInput";

interface AvaliacaoTecnologia {
  potencialInovacao: number;
  possibilidadeEvolucao: number;
  maturidadeTecnologica: number;
  viabilidadeTecnica: number;
}

interface AvaliacaoMercado {
  problemaIdentificado: number;
  existeMercado: number;
  publicoAlvoDefinido: number;
  diferencialConcorrentes: number;
}

interface AvaliacaoGestao {
  impactoSocialAmbiental: number;
  clarezaParceirosFornecedores: number;
  estruturaExecucao: number;
}

interface AvaliacaoCapital {
  clarezaInvestimentos: number;
  recursosFinanceiros: number;
  identificacaoFontes: number;
}

export default function Forms() {
  const navigate = useNavigate();

  const [nomeProjeto, setNomeProjeto] = useState<string>("");

  const [avaliacaoEmpreendedor, setAvaliacaoEmpreendedor] = useState<number>(5);

  const [avaliacaoTecnologia, setAvaliacaoTecnologia] = useState<AvaliacaoTecnologia>({
    potencialInovacao: 5,
    possibilidadeEvolucao: 5,
    maturidadeTecnologica: 5,
    viabilidadeTecnica: 5,
  });

  const [avaliacaoMercado, setAvaliacaoMercado] = useState<AvaliacaoMercado>({
    problemaIdentificado: 5,
    existeMercado: 5,
    publicoAlvoDefinido: 5,
    diferencialConcorrentes: 5,
  });

  const [avaliacaoGestao, setAvaliacaoGestao] = useState<AvaliacaoGestao>({
    impactoSocialAmbiental: 5,
    clarezaParceirosFornecedores: 5,
    estruturaExecucao: 5,
  });

  const [avaliacaoCapital, setAvaliacaoCapital] = useState<AvaliacaoCapital>({
    clarezaInvestimentos: 5,
    recursosFinanceiros: 5,
    identificacaoFontes: 5,
  });

  // Handlers gerais para mudanças em subcriterios

  const handleTecnologiaChange = (key: keyof AvaliacaoTecnologia, value: number) => {
    setAvaliacaoTecnologia((prev) => ({ ...prev, [key]: value }));
  };

  const handleMercadoChange = (key: keyof AvaliacaoMercado, value: number) => {
    setAvaliacaoMercado((prev) => ({ ...prev, [key]: value }));
  };

  const handleGestaoChange = (key: keyof AvaliacaoGestao, value: number) => {
    setAvaliacaoGestao((prev) => ({ ...prev, [key]: value }));
  };

  const handleCapitalChange = (key: keyof AvaliacaoCapital, value: number) => {
    setAvaliacaoCapital((prev) => ({ ...prev, [key]: value }));
  };

  const handleProximaSecao = async () => {
    // Aqui você pode validar o formulário antes de enviar
    if (!nomeProjeto) {
      alert("Por favor, preencha o nome do projeto");
      return;
    }

    // Montar payload com todos os dados
    const payload = {
      nomeProjeto,
      avaliacaoEmpreendedor,
      avaliacaoTecnologia,
      avaliacaoMercado,
      avaliacaoGestao,
      avaliacaoCapital,
    };

    try {
      const response = await fetch("https://seu-backend-api.com/avaliacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar avaliação");
      }

      alert("Avaliação enviada com sucesso!");

      navigate("/mainmenu");
    } catch (error) {
      alert("Erro: " + error);
    }
  };

  return (
    <div className="bg-[#f2f0f0] flex justify-center min-h-screen p-10">
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-xl">
        <h1 className="text-3xl font-semibold mb-2">Formulário de avaliação de projetos</h1>
        <p className="text-neutral-600 mb-6">
          Por favor complete todas as seções para submeter sua avaliação
        </p>

        <label className="block mb-4" htmlFor="nomeProjeto">
          <span className="text-xl font-normal text-neutral-800">Nome do projeto</span>
          <input
            id="nomeProjeto"
            type="text"
            value={nomeProjeto}
            onChange={(e) => setNomeProjeto(e.target.value)}
            placeholder="Insira aqui o nome do projeto"
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2"
          />
        </label>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Critério de avaliação: Empreendedor</h2>
          <SliderInput
            id="avaliacaoEmpreendedor"
            label="Os empreendedores envolvidos demonstram estar comprometidos com o desenvolvimento do negócio?"
            value={avaliacaoEmpreendedor}
            onChange={setAvaliacaoEmpreendedor}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Critério de avaliação: Tecnologia</h2>
          <SliderInput
            id="potencialInovacao"
            label="Potencial para ou aplicação de soluções inovadoras"
            value={avaliacaoTecnologia.potencialInovacao}
            onChange={(val) => handleTecnologiaChange("potencialInovacao", val)}
          />
          <SliderInput
            id="possibilidadeEvolucao"
            label="Possibilidade de evolução dos produtos/serviços apresentados"
            value={avaliacaoTecnologia.possibilidadeEvolucao}
            onChange={(val) => handleTecnologiaChange("possibilidadeEvolucao", val)}
          />
          <SliderInput
            id="maturidadeTecnologica"
            label="A solução a ser ofertada possui maturidade tecnológica?"
            value={avaliacaoTecnologia.maturidadeTecnologica}
            onChange={(val) => handleTecnologiaChange("maturidadeTecnologica", val)}
          />
          <SliderInput
            id="viabilidadeTecnica"
            label="Viabilidade técnica"
            value={avaliacaoTecnologia.viabilidadeTecnica}
            onChange={(val) => handleTecnologiaChange("viabilidadeTecnica", val)}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Critério de avaliação: Mercado</h2>
          <SliderInput
            id="problemaIdentificado"
            label="O problema foi identificado?"
            value={avaliacaoMercado.problemaIdentificado}
            onChange={(val) => handleMercadoChange("problemaIdentificado", val)}
          />
          <SliderInput
            id="existeMercado"
            label="Existe mercado para esta ideia?"
            value={avaliacaoMercado.existeMercado}
            onChange={(val) => handleMercadoChange("existeMercado", val)}
          />
          <SliderInput
            id="publicoAlvoDefinido"
            label="O público-alvo está bem definido?"
            value={avaliacaoMercado.publicoAlvoDefinido}
            onChange={(val) => handleMercadoChange("publicoAlvoDefinido", val)}
          />
          <SliderInput
            id="diferencialConcorrentes"
            label="O produto/serviço proposto possui um diferencial junto aos concorrentes?"
            value={avaliacaoMercado.diferencialConcorrentes}
            onChange={(val) => handleMercadoChange("diferencialConcorrentes", val)}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Critério de avaliação: Gestão</h2>
          <SliderInput
            id="impactoSocialAmbiental"
            label="O projeto possui impacto social e ambiental?"
            value={avaliacaoGestao.impactoSocialAmbiental}
            onChange={(val) => handleGestaoChange("impactoSocialAmbiental", val)}
          />
          <SliderInput
            id="clarezaParceirosFornecedores"
            label="O projeto possui clareza quantos aos potenciais parceiros e fornecedores?"
            value={avaliacaoGestao.clarezaParceirosFornecedores}
            onChange={(val) => handleGestaoChange("clarezaParceirosFornecedores", val)}
          />
          <SliderInput
            id="estruturaExecucao"
            label="O projeto possui estrutura mínima para a execução das suas atividades?"
            value={avaliacaoGestao.estruturaExecucao}
            onChange={(val) => handleGestaoChange("estruturaExecucao", val)}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Critério de avaliação: Capital</h2>
          <SliderInput
            id="clarezaInvestimentos"
            label="O projeto demonstrou clareza sobre os investimentos necessários para desenvolvimento do negócio?"
            value={avaliacaoCapital.clarezaInvestimentos}
            onChange={(val) => handleCapitalChange("clarezaInvestimentos", val)}
          />
          <SliderInput
            id="recursosFinanceiros"
            label="Os empreendedores envolvidos possuem os recursos financeiros necessários para iniciar o desenvolvimento e operação do projeto?"
            value={avaliacaoCapital.recursosFinanceiros}
            onChange={(val) => handleCapitalChange("recursosFinanceiros", val)}
          />
          <SliderInput
            id="identificacaoFontes"
            label="Já identificou como e onde obtê-los?"
            value={avaliacaoCapital.identificacaoFontes}
            onChange={(val) => handleCapitalChange("identificacaoFontes", val)}
          />
        </section>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => alert("Progresso salvo!")}
            className="px-4 py-2 border border-neutral-300 rounded-md text-neutral-700"
            type="button"
          >
            Salvar progresso
          </button>
          <button
             onClick={ () => navigate("/Dashboard")}
            className="px-4 py-2 bg-neutral-900 text-white rounded-md"
            type="button"
          >
            
        </div>
      </div>
    </div>
  );
}
