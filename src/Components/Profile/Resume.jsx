const Resume = ({ resume, handleResumeChange }) => {
  return (
    <div className="bg-white rounded-md p-4 border border-tertiary-text">
      <h2 className="text-xl font-semibold mb-3 text-dark-gray">Resume</h2>
      <input id="resumeInput" type="file" onChange={handleResumeChange} />
      {resume && <p className="mt-2 text-sm text-dark-gray">Uploaded file: {resume.name}</p>}
    </div>
  );
};

export default Resume;
