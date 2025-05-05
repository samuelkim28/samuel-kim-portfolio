function Navigation() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
        <div className="px-5 py-5 flex justify-center">
          <ul className="flex gap-9">
            <li><a href="#home" className='hover:underline'>HOME</a></li>
            <li><a href="#about" className="hover:underline">ABOUT</a></li>
            <li><a href="#projects" className="hover:underline">PROJECTS</a></li>
            <li><a href="#skills" className="hover:underline">SKILLS</a></li>
            <li><a href="#contact" className="hover:underline">CONTACT</a></li>
          </ul>
        </div>
        <div className="absolute bottom-2 left-0 right-0 h-[1px] bg-gray-300"></div>
      </nav>
    );
}

export default Navigation