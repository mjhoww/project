export default function Partners() {
  const partners = [
    {
      name: "João Silva",
      role: "Diretor Executivo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Com mais de 20 anos de experiência no mercado imobiliário rural, João é especialista em avaliação de propriedades agrícolas.",
    },
    {
      name: "Maria Santos",
      role: "Diretora Comercial",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Especialista em negociações e desenvolvimento de novos negócios, Maria lidera nossa equipe comercial há 10 anos.",
    },
    {
      name: "Pedro Oliveira",
      role: "Diretor Técnico",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      bio: "Engenheiro Agrônomo com vasta experiência em análise técnica de propriedades rurais e avaliação de potencial produtivo.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nossos Sócios</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <div key={partner.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{partner.name}</h2>
              <p className="text-green-700 font-semibold mb-4">{partner.role}</p>
              <p className="text-gray-600">{partner.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Nossa Experiência</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-green-700 mb-2">+500</p>
            <p className="text-gray-600">Propriedades Negociadas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-700 mb-2">13</p>
            <p className="text-gray-600">Anos no Mercado</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-700 mb-2">98%</p>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-700 mb-2">5</p>
            <p className="text-gray-600">Estados Atendidos</p>
          </div>
        </div>
      </div>
    </div>
  );
}