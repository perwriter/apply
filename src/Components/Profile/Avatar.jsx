import { useState } from "react";

const Avatar = ({
  portfolioImage,
  handleAvatarClick,
  handlePortfolioChange,
  imageSaved,
  handleSaveImage,
  handleEditToggle,
}) => {
  const [name, setName] = useState(""); // Manage name state
  const [editingName, setEditingName] = useState(false); // Track if user is typing

  // Handles typing in the input field and shows the Save button
  const handleInputChange = (e) => {
    setName(e.target.value);
    if (!editingName) {
      setEditingName(true);
    }
  };

  // Handles saving the name and hides the Save button
  const handleSave = () => {
    setEditingName(false);
    // You can add any save functionality here (e.g., send data to the server)
    handleEditToggle("name");
  };

  return (
    <div className="flex items-center justify-start mb-4">
      <div>
        <img
          src={
            portfolioImage
              ? URL.createObjectURL(portfolioImage)
              : "../passportphoto.png"
          }
          alt="Avatar"
          onClick={handleAvatarClick}
          className="cursor-pointer rounded-full w-32 h-32 object-cover border-1"
        />
        <input
          id="portfolioInput"
          type="file"
          onChange={handlePortfolioChange}
          style={{ display: "none" }}
        />
        {portfolioImage && !imageSaved && (
          <button
            className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md mt-4"
            onClick={handleSaveImage}
          >
            Save Image
          </button>
        )}
      </div>

      {/* Edit Name */}
      <div className="flex md:gap-4 md:justify-center justify-between items-center mt-4 mx-12">
        <div>
          <label htmlFor="name" className="font-semibold text-4xl text-green">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onInput={handleInputChange} // Handle typing input
            className={`text-4xl font-semibold bg-[#000]/0 rounded-md outline-none border-b border-red ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white`}
          />
        </div>

        {/* Save button appears only while editing */}
        {editingName && (
          <button
            className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Avatar;
