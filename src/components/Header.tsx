import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Início</Link></li>
            <li><Link href="#projects">Projetos</Link></li>
            <li><Link href="#contact">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
