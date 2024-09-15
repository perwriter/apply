import { MdOutlineEdit } from "react-icons/md";

const CoverLetter = ({ coverLetter, setCoverLetter, editingCoverLetter, handleEditToggle }) => {
  return (
    <div className="bg-white rounded-md p-4 border border-tertiary-text">
      <span className="flex justify-between">
        <h2 className="text-xl font-semibold mb-3 text-dark-gray">Cover Letter</h2>
        {editingCoverLetter ? (
          <button
            className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
            onClick={() => handleEditToggle("coverLetter")}
          >
            Save
          </button>
        ) : (
          <MdOutlineEdit className="cursor-pointer text-xl" onClick={() => handleEditToggle("coverLetter")} />
        )}
      </span>
      <div className="mt-4">
        <textarea
          id="coverLetter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          disabled={!editingCoverLetter}
          className={`border-0 bg-white ${editingCoverLetter ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white" : ""}`}
        />
      </div>
    </div>
  );
};

export default CoverLetter;
