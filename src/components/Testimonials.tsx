const testimonials = [
    {
      name: "João Silva",
      role: "CEO da Startup X",
      feedback:
        "Trabalhar com [Seu Nome] foi incrível! Ele entregou um código limpo e um design impressionante.",
      image: "/profile.jpg",
    },
    {
      name: "Maria Oliveira",
      role: "Gerente de Produto",
      feedback:
        "Profissionalismo e criatividade são marcas registradas do trabalho de [Seu Nome]. Recomendo fortemente!",
      image: "/profile.jpg",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="max-w-4xl text-center mt-16">
        <h2 className="text-4xl font-bold text-white mb-6">O que dizem sobre mim</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <p className="mt-4 text-gray-300">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  