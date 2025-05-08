import SkillCard from "../cards/SkillCard";

const skillsInfo = [
  {
    type: "Back-End",
    tools: ["Java", "Python", "C", "Go", "TypeScript"],
    img: "/skills-images/back-end.png"
  },
  {
    type: "Web and Mobile Development",
    tools: ["React", "Next.js", "Flutter", "Dart"],
    img: "/skills-images/web-dev.png"
  },
  {
    type: "Architecture",
    tools: ["Amazon Web Services", "EC2", "CloudWatch"],
    img: "/skills-images/architecture.png"
  },
  {
    type: "Version Control",
    tools: ["Git", "GitHub"],
    img: "/skills-images/version-control.png"
  }
];

function Skills() {
  const skillCardElements = skillsInfo.map((skill, idx) => (
    <SkillCard key={idx} type={skill.type} tools={skill.tools} img={skill.img} />
  ));

  return (
    <section id="skills" className="bg-gray-700 min-h-screen pt-20 pb-35">
      <h1 className="text-5xl font-bold text-center text-white mb-15">Skills</h1>
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillCardElements}
      </div>
    </section>
  );
}


  
export default Skills