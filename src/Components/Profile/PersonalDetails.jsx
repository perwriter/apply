import { MdMailOutline, MdOutlineCall, MdOutlineLocationOn, MdOutlineEdit } from "react-icons/md";

const PersonalDetails = ({ email, phone, location, setEmail, setPhone, setLocation, editingPersonal, handleEditToggle }) => {
  return (
    <div className="bg-white rounded-md p-4 border border-tertiary-text">
      <span className="flex justify-between">
        <h2 className="text-xl font-semibold mb-3 text-dark-gray">Personal Details</h2>
        {editingPersonal ? (
          <button
            className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
            onClick={() => handleEditToggle("personal")}
          >
            Save
          </button>
        ) : (
          <MdOutlineEdit className="cursor-pointer text-xl" onClick={() => handleEditToggle("personal")} />
        )}
      </span>
      <div className="space-y-2 mt-4">
        <div className="flex gap-3 items-center">
          <label htmlFor="email">
            <MdMailOutline />
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!editingPersonal}
            className={`border-0 bg-white ${editingPersonal ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white" : ""}`}
          />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="tel">
            <MdOutlineCall />
          </label>
          <input
            id="tel"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!editingPersonal}
            className={`border-0 bg-white ${editingPersonal ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white" : ""}`}
          />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="location">
            <MdOutlineLocationOn />
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled={!editingPersonal}
            className={`border-0 bg-white ${editingPersonal ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
