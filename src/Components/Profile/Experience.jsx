import { MdOutlineEdit } from "react-icons/md";

const Experience = ({ experience, setExperience, editingExperience, handleEditToggle }) => {
  return (
    <div className="bg-white rounded-md p-4 border border-tertiary-text">
      <span className="flex justify-between">
        <h2 className="text-xl font-semibold mb-3 text-dark-gray">Experience</h2>
        {editingExperience ? (
          <button
            className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
            onClick={() => handleEditToggle("experience")}
          >
            Save
          </button>
        ) : (
          <MdOutlineEdit className="cursor-pointer text-xl" onClick={() => handleEditToggle("experience")} />
        )}
      </span>
      <div className="mt-4">
        <textarea
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          disabled={!editingExperience}
          className={`border-0 bg-white ${editingExperience ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white" : ""}`}
        />
      </div>
    </div>
  );
};

export default Experience;
