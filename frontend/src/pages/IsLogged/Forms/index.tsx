import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

 export default function Forms() {
  const [nomeProjeto, setNomeProjeto] = useState<string>("");
  const [avaliacaoEmpreendedor, setAvaliacaoEmpreendedor] = useState<number>(5);
  
  const [avaliacaoTecnologia, setAvaliacaoTecnologia] = useState<number>(5);

  const handleNomeProjetoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNomeProjeto(e.target.value);
  };

  const handleAvaliacaoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAvaliacaoEmpreendedor(Number(e.target.value));
  };

  const handleCancelar = () => {
    setNomeProjeto("");
    setAvaliacaoEmpreendedor(5);
  };

  const handleProximaSecao = () => {
    alert("Deseja mesmo concluir a sua avaliação?");
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
            onChange={handleNomeProjetoChange}
            placeholder="Insira aqui o nome do projeto"
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2"
          />
        </label>

        <label className="block mb-6" htmlFor="avaliacaoEmpreendedor">
          <span className="text-xl font-normal text-neutral-800">1. Critério de avaliação: Empreendedor</span>
          <p className="mt-2 text-neutral-700">
            Os empreendedores envolvidos demonstram estar comprometidos com o desenvolvimento do negócio?
          </p>
          <input
            id="avaliacaoEmpreendedor"
            type="range"
            min={0}
            max={10}
            value={avaliacaoEmpreendedor}
            onChange={handleAvaliacaoChange}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span>
            <span>4</span><span>5</span><span>6</span><span>7</span>
            <span>8</span><span>9</span><span>10</span>
          </div>
        </label>



        <label className="block mb-6" htmlFor="avaliacaoTecnologia">
          <span className="text-xl font-normal text-neutral-800">2. Critério de avaliação: Tecnologia</span>
         
          <p className="mt-2 text-neutral-700">
            Potencial para ou aplicação de soluções inovadoras
          </p>
          <input
            id="avaliacaoTecnologia" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>


          <p className="mt-2 text-neutral-700">
            Possibilidade de evolução dos produtos/serviços apresentados
          </p>
          <input
            id="avaliacaoTecnologia" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

            <p className="mt-2 text-neutral-700">
              A solução a ser ofertada possui maturidade tecnológica?
          </p>
          <input
            id="avaliacaoTecnologia" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

          <p className="mt-2 text-neutral-700">Viabilidade técnica </p>
              <input
                id="avaliacaoTecnologia" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
              />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>


        </label>

         <label className="block mb-6" htmlFor="avaliacaoMercado">
          <span className="text-xl font-normal text-neutral-800">3. Critério de avaliação: Mercado</span>
         
          <p className="mt-2 text-neutral-700">
            O problema foi identificado?
          </p>
          <input
            id="avaliacaoMercado" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>


          <p className="mt-2 text-neutral-700">
            Existe mercado para esta ideia?
          </p>
          <input
            id="avaliacaoMercado" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

            <p className="mt-2 text-neutral-700">
              O público-alvo está bem definido?
          </p>
          <input
            id="avaliacaoMercado" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

          <p className="mt-2 text-neutral-700">
            O produto/serviço proposto possui um diferencial junto aos concorrentes? </p>
              <input
                id="avaliacaoMercado" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
              />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>


        </label>


        <label className="block mb-6" htmlFor="avaliacaoGestão">
          <span className="text-xl font-normal text-neutral-800">4. Critério de avaliação: Gestão</span>
         
          <p className="mt-2 text-neutral-700">
            O projeto possui impacto social e ambiental (geração de renda, melhorias de qualidade de vida, ações de sustentabilidade ambiental e melhorias para a sociedade)?
          </p>
          <input
            id="avaliacaoGestão" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

            <p className="mt-2 text-neutral-700">
              O projeto possui clareza quantos aos potenciais parceiros e fornecedores?
          </p>
          <input
            id="avaliacaoGestão" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
         
          </div>
                    <p className="mt-2 text-neutral-700">
            O projeto possui estrutura mínima para a execução das suas atividades?
          </p>
          <input
            id="avaliacaoGestão" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

        </label>

                <label className="block mb-6" htmlFor="avaliacaoCapital">
          <span className="text-xl font-normal text-neutral-800">5. Critério de avaliação: Capital</span>
         
          <p className="mt-2 text-neutral-700">
            O projeto demonstrou clareza sobre os investimentos necessários para desenvolvimento do negócio?
          </p>
          <input
            id="avaliacaoCapital" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

            <p className="mt-2 text-neutral-700">
              Os empreendedores envolvidos possuem os recursos financeiros necessários para iniciar o desenvolvimento e operação do projeto?
          </p>
          <input
            id="avaliacaoCapital" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
         
          </div>
                    <p className="mt-2 text-neutral-700">
            O Já identificou como e onde obtê-los?
          </p>
          <input
            id="avaliacaoCapital" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

        </label>

      </label>

                <label className="block mb-6" htmlFor="avaliacaoCapital">
          <span className="text-xl font-normal text-neutral-800">5. Critério de avaliação: Capital</span>
         
          <p className="mt-2 text-neutral-700">
            O projeto demonstrou clareza sobre os investimentos necessários para desenvolvimento do negócio?
          </p>
          <input
            id="avaliacaoCapital" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

            <p className="mt-2 text-neutral-700">
              Os empreendedores envolvidos possuem os recursos financeiros necessários para iniciar o desenvolvimento e operação do projeto?
          </p>
          <input
            id="avaliacaoCapital" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
         
          </div>
                    <p className="mt-2 text-neutral-700">
            O Já identificou como e onde obtê-los?
          </p>
          <input
            id="avaliacaoCapital" type="range" min={0} max={10}  value={avaliacaoEmpreendedor}  onChange={handleAvaliacaoChange} className="w-full mt-2"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>

        </label>












        <div className="flex justify-end gap-4">
          <button
            onClick={handleCancelar}
            className="px-4 py-2 border border-neutral-300 rounded-md text-neutral-700"
            type="button"
          >
            Salvar progresso
          </button>
          <button
            onClick={handleProximaSecao}
            className="px-4 py-2 bg-neutral-900 text-white rounded-md"
            type="button"
          >
            Próxima seção
          </button>
        </div>
      </div>
    </div>
  );
};
