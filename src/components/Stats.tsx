const stats = [
    { number: "50+", label: "Projetos Concluídos" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "10K+", label: "Linhas de Código" },
  ];
  
  export default function Stats() {
    return (
      <section className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-6">Minhas Estatísticas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
              <h3 className="text-4xl font-bold text-blue-400">{stat.number}</h3>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  