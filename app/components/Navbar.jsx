const Navbar = () => {
    return (
        <nav className="w-full flex justify-between items-center py-4 px-6 bg-gray-900 text-white">
          <h1 className="text-xl font-bold">Architect Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      );
    };
    
    export default Navbar;