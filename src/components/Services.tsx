const services = [
    { title: "Desenvolvimento Web", description: "Criação de sites modernos e responsivos com as melhores tecnologias." },
    { title: "Design UI/UX", description: "Desenvolvimento de interfaces intuitivas e acessíveis para melhor experiência do usuário." },
    { title: "Otimização de Performance", description: "Melhoria de velocidade e SEO para garantir melhor ranqueamento." }
  ];
  
  export default function Services() {
    return (
      <section className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-6">Meus Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  