import Image from "next/image";

export default function Home() {
  const celulares = [
    {
      id: 1,
      nome: "iPhone 13 Pro",
      imagem: "/celular1.jpg",
      descricao: "Tela 6.1", 256GB, 5G - Excelente estado",
      preco: "R$ 4.500",
      servico: "Manutenção e Venda"
    },
    {
      id: 2,
      nome: "Samsung Galaxy S22",
      imagem: "/celular2.jpg", 
      descricao: "Tela 6.2", 128GB, 5G - Semi-novo",
      preco: "R$ 2.800",
      servico: "Venda"
    },
    {
      id: 3,
      nome: "Xiaomi Redmi Note 11",
      imagem: "/celular3.jpg",
      descricao: "Tela 6.4", 128GB, 4G - Bom estado",
      preco: "R$ 1.200", 
      servico: "Conserto e Venda"
    }
  ];

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
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Celulares</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Assistência de Celulares
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Conserto, venda e manutenção de smartphones com qualidade garantida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Fazer Orçamento
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Ver Celulares
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consertos</h3>
              <p className="text-gray-600">Troca de tela, bateria, câmera e muito mais</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Venda</h3>
              <p className="text-gray-600">Celulares novos e usados com garantia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Manutenção</h3>
              <p className="text-gray-600">Limpeza e manutenção preventiva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Celulares em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {celulares.map((celular) => (
              <div key={celular.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={celular.imagem}
                    alt={celular.nome}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {celular.servico}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{celular.nome}</h3>
                  <p className="text-gray-600 mb-4">{celular.descricao}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{celular.preco}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Solicitar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl mb-8">Faça um orçamento sem compromisso</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              WhatsApp: (11) 99999-9999
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-colors">
              Telefone: (11) 3333-3333
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Tufocell. Todos os direitos reservados.</p>
            <p className="text-sm text-gray-400 mt-2">Assistência Técnica Especializada em Celulares</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
