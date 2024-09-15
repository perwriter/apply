import { useEffect } from "react";
import html2pdf from "html2pdf.js";
import { FiMusic, FiSearch, FiBook, FiMap, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Resume() {
  useEffect(() => {
    // Feather icons not needed, so this can be removed
  }, []);

  const printDocument = () => {
    const element = document.getElementById("resume-content");
    const options = {
      filename: "Kimiri_Peter_Macharia_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div id="resume-content" className="container mx-auto grid grid-cols-2 gap-8 p-20 bg-white shadow-lg max-w-4xl">
      <div className="profile col-span-2 mb-8 flex items-center gap-8">
        <div className="w-160">
          <img
            className="rounded-full cursor-pointer"
            src="../passportphoto.png"
            alt="Peter Machhtarai"
            onClick={printDocument}
          />
        </div>
        <div>
          <h1 className="text-gray-800 font-light text-4xl uppercase">
            KIMIRI <span className="font-semibold">PETER</span>
          </h1>
          <h2 className="text-orange1 font-bold text-6xl uppercase">MACHARIA</h2>
          <p className="text-black font-medium text-xl mt-2 uppercase">Industrial Chemist, Project Manager, Sales Representative</p>
          <p className="text-gray-700 mt-4">
            Proactive and results-driven personnel with expertise in quality control, process optimization, and team
            leadership. Skilled in driving continuous improvement, fostering collaboration, and delivering exceptional
            results.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-orange1 font-bold text-xl uppercase">Experience</h3>
        <div className="mt-4">
          <p className="text-gray text-sm">2019 Jan - present</p>
          <h4 className="text-black font-semibold text-lg mt-2">Part Time Virtual Assistant</h4>
          <p className="text-gray-700">
            Worked as VA for short-term and long-term projects; General Manager (Freelance writer), Transcription, Lead
            Generation, Email management, Data scraping, Project supervisor, Sales Rep, Appointment Setter.
          </p>
        </div>
        <div className="mt-6">
          <p className="text-gray text-sm">2024 Jan - 2024 April</p>
          <h4 className="text-black font-semibold text-lg mt-2">Project Manager</h4>
          <p className="text-gray-700">Contracted to find, train, supervise, and track video editors for payments.</p>
        </div>
      </div>

       {/* Skills Section */}
       <div>
        <h3 className="text-orange1 font-bold text-xl uppercase">Expertise</h3>
        <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
          <li>Sales Coordination</li>
          <li>Market Analysis</li>
          <li>Marketing</li>
          <li>Production Management</li>
          <li>Web Development</li>
          <li>Process Optimization</li>
          <li>Team Leadership</li>
        </ul>
      </div>
      {/* Industrial Experience Section */}
      <div>
        <h3 className="text-orange1 font-bold text-xl uppercase">Industrial Experience</h3>
        <div className="mt-4">
          <p className="text-gray text-sm">2022 August - December 2022</p>
          <h4 className="text-black font-semibold text-lg mt-2">Njoro Canning Factory</h4>
          <p className="text-gray-700">Internship in food processing and spice production to increase food shelf life.</p>
        </div>
      </div>
      {/* Education Section */}
      <div>
        <h3 className="text-orange1 font-bold text-xl uppercase">Education</h3>
        <div className="mt-4">
          <p className="text-gray-600 text-sm">2018 - 2023</p>
          <h4 className="text-black font-semibold text-lg mt-2">Bsc. Industrial Chemistry with Management</h4>
          <p className="text-gray-700 underline">Kenyatta University</p>
        </div>
        <div className="mt-6">
          <p className="text-gray-600 text-sm">2018 March - 2018 August</p>
          <h4 className="text-black font-semibold text-lg mt-2">Cert. Web Design and Development</h4>
          <p className="text-gray-700 underline">Tracom College</p>
        </div>
      </div>


      

      {/* Interests Section */}
      <div className="col-span-2 mt-8">
        <h3 className="text-orange1 font-bold text-xl uppercase">Interest</h3>
        <div className="flex flex-wrap gap-8 mt-4">
          <div className="text-center">
            <FiMusic className="w-6 h-6" />
            <p>Music</p>
          </div>
          <div className="text-center">
            <FiSearch className="w-6 h-6" />
            <p>Research</p>
          </div>
          <div className="text-center">
            <FiBook className="w-6 h-6" />
            <p>Books</p>
          </div>
          <div className="text-center">
            <FiMap className="w-6 h-6" />
            <p>Travel</p>
          </div>
        </div>
      </div>

     

      

      {/* Contact & Socials Section */}
      <hr className="col-span-2 border-gray-300 my-4" />
      <div className="col-span-1">
        <h3 className="text-orange1 font-bold text-xl uppercase">Contact</h3>
        <p className="text-darkgray mt-4">Nairobi, Kenya</p>
        <p className="text-darkgray">+254715990719</p>
        <p className="text-darkgray">perwriters@gmail.com</p>
      </div>
      <div className="col-span-1">
        <h3 className="text-orange1 font-bold text-xl uppercase">Socials</h3>
        <div className="flex flex-col gap-4 mt-4">
          <a href="https://github.com/perwriter" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
            <FiGithub className="w-6 h-6" />
            <span>@perwriters</span>
          </a>
          <a href="https://twitter.com/petermasharia" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
            <FiTwitter className="w-6 h-6" />
            <span>@petermasharia</span>
          </a>
          <a href="https://www.linkedin.com/in/peter-macharia-90a715187/" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
            <FiLinkedin className="w-6 h-6" />
            <span>@kimiri-peter-macharia</span>
          </a>
        </div>
      </div>
    </div>
  );
}
