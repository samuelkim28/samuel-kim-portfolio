import Image from 'next/image';

type SkillCardProps = {
  type: string;
  tools: string[];
  img: string;
};

function SkillCard({ type, tools, img }: SkillCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 transition hover:shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
        {type}
      </h2>
      <div className="flex gap-x-30">
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {tools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>        
        <Image 
          src={img}
          alt={img}  
          width={200}
          height={200}
        />        
      </div>

    </article>
  );
}

export default SkillCard;