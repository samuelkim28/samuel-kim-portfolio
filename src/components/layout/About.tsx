const aboutMe = `Hi! I'm Sam Kim, a recent graduate from the University
  of Maryland, College Park, with a B.S. in Computer Science. I’m passionate about 
  software engineering and enjoy tackling complex problems through creative and efficient
  solutions.`;

const aboutMe2 = `Over the past two summers, I interned at Amazon Web Services as a Software
  Development Engineer Intern and AstraZeneca as a Commercial IT Intern, working on projects that
  ranged from designing and developing distributed systems, as well as AI-powered app development.
  These experiences helped me build a strong foundation across different areas of software 
  engineering and adapt quickly to new technologies and team environments.`;
  
const aboutMe3 = `Outside of tech, I enjoy staying active and playing sports, particularly baseball,
  basketball, and golf. I'm always looking for a challenge and to improve my skills!`;

function About() {
  return (
    <section id="about" className="flex flex-col items-center bg-gray-800 min-h-screen pt-20">
      <h1 className="text-5xl font-bold text-center text-white">About Me</h1>
      <div>
        <p className="max-w-200 mt-10 text-lg text-white">{aboutMe}</p>
        <p className="max-w-200 mt-5 text-lg text-white">{aboutMe2}</p>
        <p className="max-w-200 mt-5 text-lg text-white">{aboutMe3}</p>
      </div>
    </section>
  );
}
  
export default About