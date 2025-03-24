export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre a Terra Brasil</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
          <p className="text-gray-600 mb-4">
            Fundada em 2010, a Terra Brasil nasceu da paixão pelo agronegócio e da necessidade de um serviço especializado em negociações de propriedades rurais.
          </p>
          <p className="text-gray-600">
            Com mais de uma década de experiência, nos tornamos referência no mercado de imóveis rurais, com foco em propriedades produtivas e de alto potencial.
          </p>
        </div>
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
            alt="Sede Terra Brasil"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Nossa Sede</h2>
        <div className="text-center">
          <p className="text-gray-600 mb-2">Rua Maria de Resende, 659</p>
          <p className="text-gray-600 mb-2">Bairro São José</p>
          <p className="text-gray-600 mb-2">Bom Despacho - MG</p>
          <p className="text-gray-600">CEP: 35633-098</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌱</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Missão</h3>
          <p className="text-gray-600">
            Facilitar negócios rurais com excelência e transparência.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👁️</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Visão</h3>
          <p className="text-gray-600">
            Ser a principal referência em negócios rurais em Minas Gerais.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⭐</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Valores</h3>
          <p className="text-gray-600">
            Ética, transparência, compromisso e excelência.
          </p>
        </div>
      </div>
    </div>
  );
}