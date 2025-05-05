import SocialIcons from "../ui/SocialIcons";

function Header() {
  return (
    <header
      id="home"
      style={{
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
      }}
      className="min-h-screen pt-24"
    >
      <div className="absolute top-40 left-20 z-10">
        <h1 className="text-5xl font-bold text-white">Samuel Kim</h1>
        <p className="mt-4 text-white text-lg">UMD CS Graduate (2025) | Aspiring Software Engineer</p>  
        <SocialIcons/>      
      </div>
      
    </header>
  );
}

export default Header;
