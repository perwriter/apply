import ProfileHeader from "../Components/Profile/ProfileHeader";
import Avatar from "../Components/Profile/Avatar";
import PersonalDetails from "../Components/Profile/PersonalDetails";
import Experience from "../Components/Profile/Experience";
import JobPreferences from "../Components/Profile/JobPreferences";
import Resume from "../Components/Profile/Resume";
import Skills from "../Components/Profile/Skills";
import CoverLetter from "../Components/Profile/CoverLetter";

import { useState } from "react";

const Profile = () => {
  const [portfolioImage, setPortfolioImage] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobPreferences, setJobPreferences] = useState("");
  const [resume, setResume] = useState(null);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);
  const [editingPreferences, setEditingPreferences] = useState(false);
  const [editingCoverLetter, setEditingCoverLetter] = useState(false);
  const [imageSaved, setImageSaved] = useState(false);

  const handleAvatarClick = () => document.getElementById("portfolioInput").click();
  const handlePortfolioChange = (e) => setPortfolioImage(e.target.files[0]);
  const handleSaveImage = () => setImageSaved(true);
  const handleResumeChange = (e) => setResume(e.target.files[0]);
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") setSkills([...skills, newSkill]);
    setNewSkill("");
  };
  const handleEditToggle = (section) => {
    if (section === "name") setEditingName(!editingPersonal);
    if (section === "personal") setEditingPersonal(!editingPersonal);
    if (section === "experience") setEditingExperience(!editingExperience);
    if (section === "preferences") setEditingPreferences(!editingPreferences);
    if (section === "coverLetter") setEditingCoverLetter(!editingCoverLetter);
  };



  return (
    <div>
      <ProfileHeader />
      <div id="profile-container">
        <Avatar
          portfolioImage={portfolioImage}
          handleAvatarClick={handleAvatarClick}
          handlePortfolioChange={handlePortfolioChange}
          imageSaved={imageSaved}
          handleSaveImage={handleSaveImage}
          editingName ={editingName}
          handleEditToggle= {handleEditToggle}
        />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 text-black/80">
        <PersonalDetails
          email={email}
          phone={phone}
          location={location}
          setEmail={setEmail}
          setPhone={setPhone}
          setLocation={setLocation}
          editingPersonal={editingPersonal}
          handleEditToggle={handleEditToggle}
        />
        {/* <Experience
          experience={experience}
          setExperience={setExperience}
          editingExperience={editingExperience}
          handleEditToggle={handleEditToggle}
        /> */}
        <JobPreferences
          editingPreferences={editingPreferences}
          handleEditToggle={handleEditToggle}
        />
        <Resume resume={resume} handleResumeChange={handleResumeChange} />
        <Skills
          skills={skills}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          handleAddSkill={handleAddSkill}
        />
        <CoverLetter
          coverLetter={coverLetter}
          setCoverLetter={setCoverLetter}
          editingCoverLetter={editingCoverLetter}
          handleEditToggle={handleEditToggle}
        />
        </div>
      </div>
    </div>
  );
};

export default Profile;
