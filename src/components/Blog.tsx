const posts = [
    { title: "Como criar um site moderno", link: "#" },
    { title: "Melhores práticas para UI/UX", link: "#" },
    { title: "Otimização de performance em sites", link: "#" }
  ];
  
  export default function Blog() {
    return (
      <section className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-6">Últimos Artigos</h2>
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <a key={index} href={post.link} className="block p-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
              <h3 className="text-blue-400 text-xl">{post.title}</h3>
            </a>
          ))}
        </div>
      </section>
    );
  }
  