import React from 'react';

const projects = [
  {
    name: 'Project 1',
    description: 'here a complete detail will show on the secreen',
  },
  {
    name: 'Project 2',
    description: 'This is the second project description.',
  },
  {
    name: 'Project 3',
    description: 'This is the third project description.',
  },
];

const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p>{project.description}</p>
            {/* Add more project details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
