import { FaTwitter, FaReddit, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        {/* Company Info */}
        <div className="text-center md:text-left mb-8">
          <h3 className="text-2xl font-bold text-zinc-100 mb-2">applylikeme.com</h3>
          <p className="text-gray-400 ">
            Simplifying your job search journey, one application at a time.
          </p>
        </div>

        {/* Links and Social Media Sections */}
        <div className="flex  md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-12 text-center md:text-left">
        <div className="flex-1">
          {/* Social Media Links */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <a
              href="https://twitter.com/applylikeme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
            >
              <FaTwitter size={24} className="mr-2" />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.reddit.com/r/applylikeme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
            >
              <FaReddit size={24} className="mr-2" />
              <span>Reddit</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} className="mr-2" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:applylikeme@gmail.com"
              className="flex items-center hover:text-primary transition-colors"
            >
              <FaEnvelope size={24} className="mr-2" />
              <span>Gmail</span>
            </a>
          </div>
          </div>

          {/* Company Links */}
          <div className="flex-1">
            <h4 className="font-bold text-black mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Shop Links */}
          <div className="flex-1">
            <h4 className="font-bold text-black mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Info */}
        <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-4">
          <p>&copy; 2024 applylikeme.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
