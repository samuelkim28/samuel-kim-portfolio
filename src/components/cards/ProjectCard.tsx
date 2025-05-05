import Image from 'next/image';

type ProjectCardProps = {
  name: string;
  img: string;
  link: string;
  desc: string;
  tools: string[];
}

function ProjectCard({name, img, link, desc, tools}: ProjectCardProps) {
  return (
    <article className="bg-white shadow-md rounded-2xl p-4 max-w-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <Image 
          src={img}
          alt={name}  
          width={300}
          height={200}
          className="rounded-lg object-cover w-full"
        />
      </div>

      <h2 className="text-xl font-semibold mb-2">{name}</h2>

      <p className="text-gray-700 mb-2">{desc}</p>

      <a 
        href={link} 
        className="text-blue-600 hover:underline break-words mb-4 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>

      <div className="flex flex-wrap gap-2 mt-2">
        {tools.map((tool, idx) => (
          <span 
            key={idx} 
            className="bg-gray-100 text-sm text-gray-800 px-2 py-1 rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard