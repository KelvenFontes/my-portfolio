export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-800 text-gray-300 mt-16">
      <p>&copy; {new Date().getFullYear()} Seu Nome - Todos os direitos reservados.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://linkedin.com/in/seuusuario" target="_blank" className="hover:text-blue-400">LinkedIn</a>
        <a href="https://github.com/seuusuario" target="_blank" className="hover:text-blue-400">GitHub</a>
        <a href="mailto:seuemail@email.com" className="hover:text-blue-400">E-mail</a>
      </div>
    </footer>
  );
}
