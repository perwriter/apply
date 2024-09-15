import { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";

const JobPreferences = ({ editingPreferences, handleEditToggle }) => {
  const [tags, setTags] = useState(["Remote", "Full-time"]); // Default tags for demonstration
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue(""); // Clear input field after adding
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="bg-white rounded-md p-4 border border-tertiary-text">
      <span className="flex justify-between">
        <h2 className="text-xl font-semibold mb-3 text-dark-gray">Job Preferences</h2>
        {editingPreferences ? (
          <button
            className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
            onClick={() => handleEditToggle("preferences")}
          >
            Save
          </button>
        ) : (
          <p className="cursor-pointer rounded-lg font-bold text-xl" onClick={() => handleEditToggle("preferences")} >+</p>
        )}
      </span>
      
      <div className="mt-4">
        {/* Tags Display */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center bg-gray-200 text-dark-gray px-2 py-1 rounded-full">
              <span>{tag}</span>
              {editingPreferences && (
                <MdClose 
                  className="ml-2 text-red-500 cursor-pointer" 
                  onClick={() => handleRemoveTag(tag)} 
                />
              )}
            </div>
          ))}
        </div>

        {/* Tag Input for Editing Mode */}
        {editingPreferences && (
          <form onSubmit={handleAddTag} className="flex items-center mt-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 rounded-md py-1.5 px-2 outline-none shadow-sm focus:ring-2 focus:ring-gray-300"
              placeholder="Add new preference"
            />
            <button type="submit" className="ml-2 px-3 py-1 text-black ring-1 bg-blue-500 rounded-md hover:bg-blue-600">
              +
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JobPreferences;
