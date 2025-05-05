import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
    return (
      <div className="flex gap-6 mt-4">
        <a
          href="https://github.com/samuelkim28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-transform transform hover:scale-110"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/samkimumd/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>
    );
  };

export default SocialIcons;
