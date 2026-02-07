import Image from "next/image";

export default function Manutencao() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Tufocell</h1>
              <span className="ml-2 text-sm text-gray-600">Assistência Técnica</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="/manutencao" className="text-blue-600 font-semibold">Manutenção</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Manutenção Especializada
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Conserto de celulares em geral: iPhone, Samsung, Xiaomi e muito mais
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Fazer Orçamento
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  WhatsApp: (11) 00000-0000
                </button>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <Image
                src="/manutenção especiclizada.jpeg"
                alt="Manutenção especializada de celulares"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços de Manutenção</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">iPhone</h3>
              <p className="text-gray-600 text-center">Conserto de todos os modelos iPhone</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Samsung</h3>
              <p className="text-gray-600 text-center">Manutenção Galaxy S, A, Note e mais</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Xiaomi</h3>
              <p className="text-gray-600 text-center">Redmi, Mi e POCO especializados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Repairs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Consertos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/manutenção01.jpeg"
                  alt="Troca de telas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Troca de Telas</h3>
                <p className="text-gray-600 mb-4">Vidro quebrado? Tela touch não funciona? Consertamos rapidamente!</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Troca de vidro e display</li>
                  <li>• Reparo de touch</li>
                  <li>• Telas originais e compatíveis</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/manutençãoemplacas.jpeg"
                  alt="Manutenção em placas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Manutenção em Placas</h3>
                <p className="text-gray-600 mb-4">Conserto eletrônico avançado para problemas complexos</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Recuperação de placas mãe</li>
                  <li>• Conserto de curtos circuitos</li>
                  <li>• Reparo de componentes eletrônicos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Outros Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Troca de Bateria</h3>
              <p className="text-gray-300">Baterias originais com garantia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Câmera</h3>
              <p className="text-gray-300">Conserto de câmera traseira e frontal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Limpeza</h3>
              <p className="text-gray-300">Limpeza de oxidação e umidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Problema com seu celular?</h2>
          <p className="text-xl mb-8">Faça um orçamento sem compromisso</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Fazer Orçamento Agora
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              WhatsApp: (11) 00000-0000
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2026 Tufocell. Todos os direitos reservados.</p>
            <p className="text-sm text-gray-400 mt-2">Assistência Técnica Especializada em Celulares</p>
            <p className="text-xs text-gray-500 mt-1">att</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
