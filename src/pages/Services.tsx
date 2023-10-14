const projects = [
  {
    name: 'Project 1 - Awesome React App',
    description: "Dive into the magic world of React with this amazing project. We've crafted a stunning user interface that will leave you speechless.",
    image: 'project1.jpg', // Add an image URL here
    link: 'https://project1.com', // Add a project URL here
    tags: ['React', 'Node.js', 'UI/UX'],
  },
  {
    name: 'Project 2 - Web Design Wonderland',
    description: 'Get lost in the mesmerizing world of web design. Explore a modern and responsive website created with HTML, CSS, and JavaScript.',
    image: 'project2.jpg', // Add an image URL here
    link: 'https://project2.com', // Add a project URL here
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Project 3 - Django Dreams',
    description: 'Embark on a journey through the Django framework. This project showcases the power of Python, Django, and database management.',
    image: 'project3.jpg', // Add an image URL here
    link: 'https://project3.com', // Add a project URL here
    tags: ['Python', 'Django', 'Database'],
  },
];

const Services = () => {
  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-4xl font-semibold text-center mb-8 text-textColor">Explore My Creative Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-white p-6 shadow-md hover:shadow-lg transform transition-transform hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
