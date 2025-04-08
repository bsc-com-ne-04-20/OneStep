import React, { useState } from 'react';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope, FaPaperclip, FaTelegram } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS

const projectImages = [
  './src/components/images/farming-image.jpg',
  './src/components/images/rural-sensitization-image.jpg',
  './src/components/images/cyber-mitigation-image.jpg',
  './src/components/images/bright-child-image.jpg',
];

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const projects = [
    {
      title: 'Farming Initiatives',
      description: 'An upcoming project focused on sustainable farming practices and digital knowledge to enhance productivity.',
      link: 'https://example.com/farming',
      imageSrc: projectImages[0],
    },
    {
      title: 'Rural Sensitization',
      description: "A system aimed at educating rural communities about health, digital literacy, and education.",
      link: 'https://example.com/rural-sensitization',
      imageSrc: projectImages[1],
    },
    {
      title: 'Cyber Mitigations',
      description: 'Developing a system with strategies to educate communities on mitigating cyber threats.',
      link: 'https://example.com/cyber-mitigation',
      imageSrc: projectImages[2],
    },
    {
      title: 'Digital Child Initiative',
      description: "A system dedicated to enhancing children's digital literacy in education and ensuring their safety online.",
      link: 'https://example.com/bright-child',
      imageSrc: projectImages[3],
    },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'file' && files[0]) {
      if (files[0].size > 5 * 1024 * 1024) { // 5 MB limit
        setErrorMessage('File size must not exceed 5MB.');
        return;
      } else {
        setErrorMessage('');
      }
    }

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const formDataToSend = new FormData(form);

    emailjs.sendForm('service_2nbkue3', 'template_sf3q8vc',  e.target, 'Nwyf8d7b5FrenjEmD')
      .then((result) => {
        console.log('Message sent: ', result.text);
        alert('Your message has been sent successfully! We are reviewing it and will respond shortly.');
        setFormData({ name: '', email: '', message: '', file: null });
      }, (error) => {
        console.log('Error: ', error.text);
        alert('There was an error sending your message. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-green-300 to-blue-300 min-h-screen">
      {/* Portfolio Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">My Portfolio</h1>
        <p className="text-lg text-gray-100">A showcase of my upcoming projects</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {projects.map((project, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden h-64 transition-transform transform hover:scale-105 cursor-pointer">
            <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-gray-200">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section className="mb-12 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-base md:text-lg mb-2">
          I am a passionate developer who loves building web applications using modern technologies. 
          My goal is to create user-friendly and efficient solutions to real-world problems.
        </p>
        <p className="text-base md:text-lg mb-2">
          With experience in both frontend and backend technologies, I enjoy collaborating with teams to deliver quality products. 
          In my spare time, I continuously learn new technologies and take on personal projects that challenge my skills.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-6 rounded-lg mb-12 mx-auto max-w-md">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-base md:text-lg mb-2">
          Feel free to reach out via email at: <strong>clementlyson99@gmail.com</strong>
        </p>
        <p className="text-base md:text-lg mb-4">
          You can also connect with me on social media:
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-around mb-4">
          <a href="https://www.linkedin.com/in/clement-lyson" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.facebook.com/clement.masauko" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={30} />
          </a>
          <a href="https://wa.me/+265886096459" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://telegram.me/@Cmasauko" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaTelegram size={30} />
          </a>
          <a href="mailto:clementlyson99@gmail.com" className="text-red-600 hover:text-red-800">
            <FaEnvelope size={30} />
          </a>
        </div>

        {/* Simple Contact Form */}
        <form className="mt-6 space-y-4" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <FaPaperclip size={20} className="mr-2" />
              <input
                type="file"
                name="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                onChange={handleChange}
              />
              <span className="text-blue-600 hover:text-blue-700">Attach File (max 5MB)</span>
            </label>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className={`w-full text-white py-2 rounded transition duration-200 ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loader"></span> // Spinner
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </section>

      <style jsx>{`
        .loader {
          border: 4px solid white; /* Increased thickness */
          border-top: 4px solid blue; /* Blue color for the spinner */
          border-radius: 50%;
          width: 30px; /* Increased size */
          height: 30px; /* Increased size */
          animation: spin 1s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;