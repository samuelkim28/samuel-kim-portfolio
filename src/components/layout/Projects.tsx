import ProjectCard from "../cards/ProjectCard";

const projectInfo = [  
  {
    name: "Stock Tracking and Analysis",
    img: "/project-screenshots/stock-app-screenshot.png",
    link: "https://github.com/samuelkim28/stock-tracking-and-analysis",
    desc: "Discover new stocks and gain important insights about their volatility and overall trends",
    tools: ["Next.js", "TypeScript", "Flask", "Python", "yfinance", "Tailwind CSS"]
  },
  {
    name: "MLB Player Performance Tracker",
    img: "/project-screenshots/web-app-screenshot.png",
    link: "https://github.com/samuelkim28/MLB-Player-Performance-Tracker",
    desc: "Displays and ranks (by player performance) MLB player stats in real-time",
    tools: ["React.js", "JavaScript", "HTML", "CSS"]
  },
  {
    name: "Personal Portfolio Website",
    img: "/project-screenshots/portfolio-screenshot.png",
    link: "https://github.com/samuelkim28/samuel-kim-portfolio",
    desc: "Portfolio website built using Next.js and Tailwind CSS",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"]
  }
];

function Projects() {
  const projectCardElements = projectInfo.map((project, idx) => <ProjectCard key={idx} name={project.name} img={project.img} link={project.link} desc={project.desc} tools={project.tools}/>)

  return (
    <section id="projects" className="bg-gray-300 min-h-screen pt-20 pb-15">
      <h1 className="text-5xl font-bold text-center text-gray-800">Projects</h1>
      <div className="mt-15 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectCardElements}
      </div>
    </section>
  );
}
  
export default Projects