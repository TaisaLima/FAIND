import React from "react";
import frame2 from "./frame-2.svg";
import frame3 from "./frame-3.svg";
import frame from "./frame.svg";
import image from "./image.svg";

export const FormularioDe = (): JSX.Element => {
  return (
    <div className="bg-[#f2f0f0] flex flex-row justify-center w-full">
      <div className="bg-[#f2f0f0] w-[1440px] h-[1024px]">
        <div className="relative w-[768px] h-[948px] top-[27px] left-[336px] bg-white rounded-lg border-0 border-none shadow-[0px_4px_4px_#00000040] backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)]">
          <header className="absolute w-[704px] h-[68px] top-8 left-8 bg-transparent border-0 border-none">
            <p className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-900 text-3xl tracking-[0] leading-[30px] whitespace-nowrap">
              Formulário de avaliação de projetos
            </p>

            <p className="absolute top-[46px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-base tracking-[0] leading-4 whitespace-nowrap">
              Por favor complete todas as seções para submeter sua avaliação
            </p>
          </header>

          <div className="flex flex-col w-[704px] items-start gap-10 absolute top-[132px] left-8 border-0 border-none">
            <div className="relative self-stretch w-full h-24 border-0 border-none">
              <div className="absolute top-0.5 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-800 text-xl tracking-[0] leading-5 whitespace-nowrap">
                1. Nome do projeto
              </div>

              <div className="h-10 top-[41px] bg-white rounded-md border border-solid border-neutral-300 absolute w-[704px] left-0">
                <p className="absolute h-[19px] top-2.5 left-3 [font-family:'Inter-Regular',Helvetica] font-normal text-[#adaebc] text-base tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                  Insira aqui o nome do projeto
                </p>
              </div>
            </div>

            <div className="relative self-stretch w-full h-24 border-0 border-none">
              <div className="absolute top-0.5 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-800 text-xl tracking-[0] leading-5 whitespace-nowrap">
                2. Perfil do projeto
              </div>

              <div className="absolute w-[704px] h-10 top-[41px] left-0 bg-white rounded-md border border-solid border-neutral-300">
                <img
                  className="absolute w-6 h-6 top-2 left-[672px]"
                  alt="Frame"
                  src={frame}
                />

                <p className="absolute h-[19px] top-2.5 left-3 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                  Selecione o tipo de projeto
                </p>
              </div>
            </div>

            <div className="relative self-stretch w-full h-[284px] border-0 border-none">
              <p className="absolute top-0.5 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-800 text-xl tracking-[0] leading-5 whitespace-nowrap">
                3. Critério de avaliação: Empreendedor
              </p>

              <div className="flex flex-col w-[704px] items-start gap-8 absolute top-[52px] left-0 border-0 border-none">
                <div className="relative self-stretch w-full h-14 border-0 border-none">
                  <div className="absolute w-[704px] h-5 top-0 left-0 border-0 border-none">
                    <p className="absolute top-px left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-700 text-sm tracking-[0] leading-[normal]">
                      Os empreendedores envolvidos demonstram estar
                      comprometidos com o desenvolvimento do negócio?
                    </p>
                  </div>

                  <div className="absolute w-[704px] h-2 top-[30px] left-0 bg-neutral-200 rounded-full border-[0.5px] border-solid border-[#b7b5b5]">
                    <div className="w-9 h-2 bg-[#0075ff] rounded-full">
                      <div className="flex w-[18px] h-[18px] items-center justify-center relative top-[-5px] left-6">
                        <img
                          className="relative w-[18px] h-[18px]"
                          alt="Frame"
                          src={frame3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[704px] h-4 top-12 left-0 border-0 border-none">
                    <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      0
                    </div>

                    <div className="left-[346px] absolute top-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      5
                    </div>

                    <div className="left-[692px] absolute top-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="relative self-stretch w-full h-14 border-0 border-none">
                  <div className="absolute w-[704px] h-5 top-0 left-0 border-0 border-none">
                    <p className="absolute top-px left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-700 text-sm tracking-[0] leading-[normal]">
                      A equipe atual é adequada para o desenvolvimento do
                      projeto?
                    </p>
                  </div>

                  <div className="absolute w-[704px] h-2 top-[30px] left-0 bg-neutral-200 rounded-full border-[0.5px] border-solid border-[#b7b5b5]">
                    <div className="w-9 h-2 bg-[#0075ff] rounded-full">
                      <div className="flex w-[18px] h-[18px] items-center justify-center relative top-[-5px] left-6">
                        <img
                          className="relative w-[18px] h-[18px]"
                          alt="Frame"
                          src={image}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[704px] h-4 top-12 left-0 border-0 border-none">
                    <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      0
                    </div>

                    <div className="left-[346px] absolute top-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      5
                    </div>

                    <div className="left-[692px] absolute top-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="relative self-stretch w-full h-16 border-0 border-none">
                  <div className="absolute w-[704px] h-5 top-0 left-0 border-0 border-none">
                    <p className="absolute top-px left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-700 text-sm tracking-[0] leading-[normal]">
                      Os empreendedores envolvidos possuem os conhecimentos
                      técnicos necessários para desenvolver o<br />
                      projeto?
                    </p>
                  </div>

                  <div className="h-2 top-12 bg-neutral-200 rounded-full border-[0.5px] border-solid border-[#b7b5b5] absolute w-[704px] left-0">
                    <div className="w-9 h-2 bg-[#0075ff] rounded-full">
                      <div className="flex w-[18px] h-[18px] items-center justify-center relative top-[-5px] left-6">
                        <img
                          className="relative w-[18px] h-[18px]"
                          alt="Frame"
                          src={frame2}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[704px] h-4 top-16 left-0 border-0 border-none">
                    <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      0
                    </div>

                    <div className="left-[346px] absolute top-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      5
                    </div>

                    <div className="left-[692px] absolute top-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-xs tracking-[0] leading-3 whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-[42px] border-0 border-none">
              <button className="all-[unset] box-border absolute w-[86px] h-[42px] top-0 left-[434px] rounded-md border border-solid border-neutral-300">
                <div className="absolute top-2.5 left-[9px] [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-700 text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Cancelar
                </div>
              </button>

              <button className="all-[unset] box-border absolute w-[167px] h-[42px] top-0 left-[537px] bg-neutral-900 rounded-md border-0 border-none">
                <div className="absolute w-[136px] top-[11px] left-4 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
                  Próxima seção
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};