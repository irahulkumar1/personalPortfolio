import { AiOutlineCloseCircle } from 'react-icons/ai';
import React, { useEffect, useRef } from 'react';

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface WorkPopUpProps {
  selectedProject: Project | null;
  closeModal: () => void;
}

const WorkPopUp: React.FC<WorkPopUpProps> = ({ selectedProject, closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);

  if (!selectedProject) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 bg-black bg-opacity-50 flex justify-center items-center">
      <div ref={modalRef} className="bg-white p-6 rounded-lg max-w-2xl relative transform transition-transform duration-300 ease-in-out">
        <button className="absolute top-4 right-4 text-gray-500" onClick={closeModal}>
          <AiOutlineCloseCircle size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
        <img src={selectedProject.image} alt={selectedProject.name} className="mb-4 rounded-lg" />
        <p className="text-gray-600 mb-4">{selectedProject.description}</p>
        <div className="flex flex-wrap mb-4">
          {selectedProject.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <div>
          <p className="text-gray-600">
            Website Link: {selectedProject.link ? <a href={selectedProject.link} className="text-blue-500">{selectedProject.link}</a> : "Not Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkPopUp;
