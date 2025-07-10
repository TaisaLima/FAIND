import React from "react";
import frame2 from "./frame-2.svg";
import frame3 from "./frame-3.svg";
import frame4 from "./frame-4.svg";
import frame5 from "./frame-5.svg";
import frame6 from "./frame-6.svg";
import frame7 from "./frame-7.svg";
import frame8 from "./frame-8.svg";
import frame9 from "./frame-9.svg";
import frame from "./frame.svg";
import image from "./image.svg";

export const Frame = (): JSX.Element => {
  return (
    <div className="w-[1440px] h-[1024px]">
      <div className="h-[1024px]">
        <div className="flex flex-col w-[1440px] h-[1024px] items-start relative bg-white rounded-lg overflow-hidden border-2 border-solid border-[#ced4da]">
          <div className="relative w-[1440px] h-[1440px]">
            <div className="inline-flex flex-col items-start relative border-0 border-none">
              <div className="relative w-[1440px] h-[1440px] bg-neutral-50 border-0 border-none">
                <div className="relative h-[820px]">
                  <div className="absolute w-[1440px] h-[820px] top-0 left-0 border-0 border-none">
                    <div className="relative w-[1280px] h-[708px] top-20 left-20 border-0 border-none">
                      <div className="absolute w-[1248px] h-[252px] top-0 left-4 border-0 border-none">
                        <div className="absolute w-[1248px] h-10 top-0 left-0 border-0 border-none">
                          <div className="absolute w-[129px] top-[5px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-6">
                            Visão Geral
                          </div>

                          <button className="all-[unset] box-border absolute w-[186px] h-10 top-0 left-[1062px] bg-neutral-900 rounded-lg border-0 border-none">
                            <div className="absolute w-[115px] top-2.5 left-[46px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
                              Nova Avaliação
                            </div>

                            <div className="absolute w-3.5 h-5 top-2.5 left-6 border-0 border-none">
                              <div className="flex w-3.5 h-4 items-center justify-center relative top-0.5">
                                <img
                                  className="relative w-3.5 h-4"
                                  alt="Frame"
                                  src={frame3}
                                />
                              </div>
                            </div>
                          </button>
                        </div>

                        <div className="absolute w-[1248px] h-[42px] top-16 left-0 border-0 border-none">
                          <div className="absolute w-[1128px] h-[42px] top-0 left-0 border-0 border-none">
                            <div className="h-[42px] border-0 border-none">
                              <div className="relative w-[1128px] h-[42px] rounded-lg">
                                <div className="absolute w-[1128px] h-[42px] top-0 left-0 bg-white rounded-lg border border-solid border-neutral-300">
                                  <div className="absolute w-[154px] h-[42px] -top-px left-10 [font-family:'Inter-Regular',Helvetica] font-normal text-[#adaebc] text-base tracking-[0] leading-6">
                                    Pesquisar projetos...
                                  </div>
                                </div>

                                <div className="flex w-4 h-4 items-center justify-center absolute top-3 left-3">
                                  <img
                                    className="relative w-4 h-4"
                                    alt="Frame"
                                    src={frame4}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <button className="all-[unset] box-border absolute w-[104px] h-[42px] top-0 left-[1144px] rounded-lg border border-solid border-neutral-300">
                            <div className="absolute w-[47px] top-2.5 left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
                              Filtros
                            </div>

                            <div className="flex w-4 h-4 items-center justify-center absolute top-[13px] left-[17px]">
                              <img
                                className="relative w-4 h-4"
                                alt="Frame"
                                src={frame2}
                              />
                            </div>
                          </button>
                        </div>

                        <div className="absolute w-[1248px] h-[122px] top-[130px] left-0 border-0 border-none">
                          <div className="absolute w-[405px] h-[122px] top-0 left-0 bg-white rounded-xl border border-solid border-neutral-200">
                            <div className="absolute w-[355px] h-8 top-[25px] left-[25px] border-0 border-none">
                              <div className="absolute w-[91px] top-[5px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                                Pendentes
                              </div>

                              <div className="absolute w-[26px] top-px left-[331px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-6">
                                12
                              </div>
                            </div>

                            <div className="absolute w-[355px] h-6 top-[73px] left-[25px] border-0 border-none">
                              <div className="flex w-4 h-4 items-center justify-center absolute top-1 left-0">
                                <img
                                  className="relative w-4 h-4"
                                  alt="Frame"
                                  src={frame5}
                                />
                              </div>

                              <div className="absolute w-[168px] top-0.5 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-base tracking-[0] leading-4">
                                Aguardando avaliação
                              </div>
                            </div>
                          </div>

                          <div className="absolute w-[405px] h-[122px] top-0 left-[421px] bg-white rounded-xl border border-solid border-neutral-200">
                            <div className="absolute w-[355px] h-8 top-[25px] left-[25px] border-0 border-none">
                              <div className="w-[118px] top-[5px] left-0 text-black text-lg leading-[18px] whitespace-nowrap absolute [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
                                Em Progresso
                              </div>

                              <div className="w-[15px] left-[341px] absolute top-px [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-6">
                                5
                              </div>
                            </div>

                            <div className="absolute w-[355px] h-6 top-[73px] left-[25px] border-0 border-none">
                              <div className="flex w-4 h-4 items-center justify-center absolute top-1 left-0">
                                <img
                                  className="relative w-4 h-4"
                                  alt="Frame"
                                  src={frame6}
                                />
                              </div>

                              <div className="w-[114px] top-0.5 left-6 text-neutral-600 text-base leading-4 absolute [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
                                Em andamento
                              </div>
                            </div>
                          </div>

                          <div className="absolute w-[405px] h-[122px] top-0 left-[843px] bg-white rounded-xl border border-solid border-neutral-200">
                            <div className="absolute w-[355px] h-8 top-[25px] left-[25px] border-0 border-none">
                              <div className="absolute w-24 top-[5px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                                Finalizados
                              </div>

                              <div className="w-[30px] left-[326px] absolute top-px [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-6">
                                28
                              </div>
                            </div>

                            <div className="absolute w-[355px] h-6 top-[73px] left-[25px] border-0 border-none">
                              <div className="flex w-4 h-4 items-center justify-center absolute top-1 left-0">
                                <img
                                  className="relative w-4 h-4"
                                  alt="Frame"
                                  src={frame7}
                                />
                              </div>

                              <div className="absolute w-[164px] top-0.5 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-base tracking-[0] leading-4">
                                Avaliações completas
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute w-[1248px] h-[424px] top-[284px] left-4 bg-white rounded-xl border border-solid border-neutral-200">
                        <div className="absolute w-[1246px] h-[77px] top-px left-px border-b [border-bottom-style:solid] border-neutral-200">
                          <div className="absolute w-[221px] top-[25px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-5 whitespace-nowrap">
                            Projetos para Avaliação
                          </div>
                        </div>

                        <div className="absolute w-[1246px] h-[345px] top-[78px] left-px border-0 border-none">
                          <div className="absolute w-[1246px] h-[172px] top-0 left-0 border-0 border-none">
                            <div className="absolute w-[1198px] h-[84px] top-6 left-6 border-0 border-none">
                              <div className="absolute w-[648px] h-[84px] top-0 left-0 border-0 border-none">
                                <div className="absolute w-[226px] top-[3px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                                  Projeto Sistema de Gestão
                                </div>

                                <p className="absolute w-[325px] top-[33px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-sm tracking-[0] leading-[14px]">
                                  Desenvolvimento Web • Enviado em 15 Jan 2025
                                </p>

                                <p className="absolute w-[647px] top-[62px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-4">
                                  Sistema integrado para gestão empresarial com
                                  módulos de RH, Financeiro e Vendas.
                                </p>
                              </div>

                              <div className="absolute w-[87px] h-7 top-0 left-[1111px] bg-neutral-100 rounded-full border-0 border-none">
                                <div className="absolute w-16 top-[5px] left-3 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-sm tracking-[0] leading-[normal]">
                                  Pendente
                                </div>
                              </div>
                            </div>

                            <button className="all-[unset] box-border absolute w-40 h-6 top-[124px] left-6 border-0 border-none">
                              <div className="absolute w-[138px] top-0.5 left-[22px] [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-700 text-base text-center tracking-[0] leading-[normal]">
                                Selecionar Projeto
                              </div>

                              <div className="flex w-3.5 h-4 items-center justify-center absolute top-1 left-0">
                                <img
                                  className="relative w-3.5 h-4"
                                  alt="Frame"
                                  src={frame8}
                                />
                              </div>
                            </button>
                          </div>

                          <div className="absolute w-[1246px] h-[173px] top-[172px] left-0 border-t [border-top-style:solid] border-neutral-200">
                            <div className="absolute w-[1198px] h-[84px] top-[25px] left-6 border-0 border-none">
                              <div className="absolute w-[580px] h-[84px] top-0 left-0 border-0 border-none">
                                <div className="absolute w-[135px] top-[3px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                                  App de Delivery
                                </div>

                                <p className="absolute w-[222px] top-[33px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-sm tracking-[0] leading-[14px]">
                                  Mobile • Enviado em 12 Jan 2025
                                </p>

                                <p className="absolute w-[580px] top-[62px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-4">
                                  Aplicativo móvel para entrega de produtos com
                                  rastreamento em tempo real.
                                </p>
                              </div>

                              <div className="absolute w-[116px] h-7 top-0 left-[1082px] bg-neutral-100 rounded-full border-0 border-none">
                                <div className="absolute w-[92px] top-[5px] left-3 [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-sm tracking-[0] leading-[normal]">
                                  Em Progresso
                                </div>
                              </div>
                            </div>

                            <button className="all-[unset] box-border absolute w-[173px] h-6 top-[125px] left-6 border-0 border-none">
                              <div className="absolute w-[150px] top-0.5 left-[22px] [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-700 text-base text-center tracking-[0] leading-[normal]">
                                Continuar Avaliação
                              </div>

                              <div className="flex w-3.5 h-4 items-center justify-center absolute top-1 left-0">
                                <img
                                  className="relative w-3.5 h-4"
                                  alt="Frame"
                                  src={frame9}
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <header className="absolute w-[1440px] h-[65px] top-0 left-0 bg-white [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-neutral-200">
                    <div className="relative w-[1280px] h-16 left-20 border-0 border-none">
                      <div className="absolute w-[215px] h-7 top-[18px] left-4 border-0 border-none">
                        <div className="flex w-6 h-6 items-center justify-center absolute top-0.5 left-0">
                          <img
                            className="relative w-6 h-6"
                            alt="Frame"
                            src={frame}
                          />
                        </div>

                        <div className="absolute w-[182px] top-0.5 left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-5 whitespace-nowrap">
                          Painel de Avaliação
                        </div>
                      </div>

                      <div className="absolute w-[66px] h-8 top-4 left-[1198px] border-0 border-none">
                        <div className="absolute w-[18px] h-5 top-1.5 left-0 border-0 border-none">
                          <div className="flex w-[18px] h-5 items-center justify-center relative">
                            <img
                              className="relative w-[17.5px] h-5"
                              alt="Frame"
                              src={image}
                            />
                          </div>
                        </div>

                        <div className="flex w-8 h-8 items-center justify-center absolute top-0 left-[34px]">
                          <div className="relative w-8 h-8 rounded-full border-0 border-none bg-[url(/mask-group.png)] bg-[100%_100%]" />
                        </div>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
