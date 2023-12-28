import { AiOutlineCloseCircle } from 'react-icons/ai';

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
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!selectedProject) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30" onClick={closeModal}>
      <div className="bg-white p-8 rounded-lg max-w-3xl relative" onClick={handleModalClick}>
        <button className="absolute top-4 right-4 text-gray-500" onClick={closeModal}>
          <AiOutlineCloseCircle size={24} />
        </button>
        <h2 className="text-2xl font-semibold mb-4">{selectedProject.name}</h2>
        <p className="text-gray-600 mb-4">{selectedProject.description}</p>
        <div className="flex flex-wrap">
          {selectedProject.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        {/* Add role and responsibility details here */}
      </div>
    </div>
  );
};

export default WorkPopUp;
