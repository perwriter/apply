const Skills = ({ skills, newSkill, setNewSkill, handleAddSkill }) => {
  return (
    <div className="bg-white rounded-md p-4 border border-tertiary-text">
      <h2 className="text-xl font-semibold mb-3 text-dark-gray">Skills</h2>
      <div className="flex gap-3">
        <input
          id="newSkill"
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white"
        />
        <button
          className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
          onClick={handleAddSkill}
        >
          +
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm text-dark-gray">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
