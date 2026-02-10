export default function Manutencao() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Profissional */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-2xl font-bold tracking-wide">Tufocell</h1>
                <p className="text-xs text-blue-200 font-medium">Assistência Técnica Especializada</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Landing Page Contínua */}
      <div className="relative">
        {/* Hero com Design Moderno Compacto */}
        <section className="relative py-12">
          <div className="absolute inset-0">
            <img
              src="/manutencao-especializada.jpg"
              alt="Manutenção de celulares"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  A Melhor Assistência
                  <span className="block text-blue-400">da Região</span>
                </h1>
                <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
                  Orçamento gratuito. Agende no WhatsApp em menos de 5 minutos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://wa.me/556581355184?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      Solicitar Orçamento
                    </span>
                  </a>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-all">
                    Ver Serviços
                  </button>
                </div>
                <div className="flex gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs">Online agora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">⭐ 4.9/5</span>
                    <span className="text-xs text-gray-400">(234 avaliações)</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-lg font-bold shadow-xl transform rotate-12 text-sm">
                    20% OFF
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">5min</div>
                        <div className="text-xs text-gray-300">Resposta</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">24h</div>
                        <div className="text-xs text-gray-300">Conserto</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">90d</div>
                        <div className="text-xs text-gray-300">Garantia</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">100%</div>
                        <div className="text-xs text-gray-300">Satisfação</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços - Continuação */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tipos de Consertos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/manutencao-01.jpg"
                    alt="Troca de telas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Troca de Telas</h3>
                  <p className="text-gray-600 mb-4">Vidro quebrado? Tela touch não funciona? Consertamos rapidamente!</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Troca de telas</li>
                    <li>• Troca de baterias</li>
                    <li>• Conectores de cargas</li>
                    <li>• Reparos em placa</li>
                  </ul>
                </div>
              </div>
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/manutencao-placas.jpg"
                    alt="Manutenção em placas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Manutenção em Placas</h3>
                  <p className="text-gray-600 mb-4">Conserto eletrônico avançado para problemas complexos</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Recuperação de placas mãe</li>
                    <li>• Conserto de curtos circuitos</li>
                    <li>• Reparo de componentes eletrônicos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desbloqueios de Celulares */}
        <div className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">Desbloqueios de Celulares</h2>
            <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Serviços de desbloqueio e configuração para você voltar a usar seu aparelho com segurança.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <div className="h-44 sm:h-40 overflow-hidden bg-gray-100">
                  <img
                    src="/desbloquear-numero-bloqueado-1024x576.jpg.jpeg"
                    alt="Desbloqueio de senha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Desbloqueio de Senha</h3>
                  <p className="text-gray-600">
                  Suporte para recuperação de acesso quando você esqueceu senha/padrão (quando aplicável).
                  </p>
                </div>
              </div>
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <div className="h-44 sm:h-40 overflow-hidden bg-gray-100">
                  <img
                    src="/desbloqueioremoveraccontagoogle.jpg"
                    alt="Conta Google FRP"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Conta Google (FRP)</h3>
                  <p className="text-gray-600">
                  Auxílio na regularização e configuração de conta após formatação (conforme comprovação).
                  </p>
                </div>
              </div>
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <div className="h-44 sm:h-40 bg-gray-100 flex items-center justify-center">
                  <img
                    src="/file.svg"
                    alt="Migração de dados e backup"
                    className="h-16 w-16"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Configuração e Backup</h3>
                  <p className="text-gray-600">
                  Migração de dados, backup e configuração inicial do aparelho.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="https://wa.me/556581355184?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20desbloqueio%20de%20celular."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-green-500 text-white px-8 py-3 rounded font-bold hover:bg-green-600 transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
