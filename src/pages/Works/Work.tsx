import { useState } from 'react';
import { projects } from './workData';
import WorkPopUp from './WorkPopUp';

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const openPopUp = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-4xl font-semibold text-center mb-8 text-textColor">
        Explore My Portfolio
      </h1>
      <p className="text-center">Welcome to my portfolio. Here's some of my work:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover object-center cursor-pointer"
                onClick={() => openModal(project)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-2">
                <h2 className="text-lg font-semibold">{project.name}</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                {`${project.description.slice(0, 150)}...`}
                <button className="text-blue-500" onClick={() => openPopUp(project)}>
                  See More
                </button>
              </p>
              <div className="flex flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <WorkPopUp selectedProject={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Work;
