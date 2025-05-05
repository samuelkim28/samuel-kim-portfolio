import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section 
      id="contact" 
      className="bg-gray-300 min-h-[90vh] pt-20 px-4"
    >
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-15">
        Contact Me
      </h1>

      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-md p-8">
        <p className="text-lg text-gray-700 text-center mb-8">
          Feel free to reach out and connect!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center space-y-4">
            <FaEnvelope className="text-4xl" />
            <a href="mailto:samuel.kim.2898@gmail.com" className="hover:underline">
            samuel.kim.2898@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaLinkedin className="text-4xl text-blue-600" />
            <p className="text-lg text-gray-800">
              <a href="https://linkedin.com/in/samkimumd" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/samkimumd
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaGithub className="text-4xl" />
            <p className="text-lg text-gray-800">
              <a href="https://github.com/samuelkim28" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/samuelkim28
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
