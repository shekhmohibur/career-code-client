import { Link } from "react-router";
import {
  Briefcase,
  User,
  FileText,
  PlusCircle,
  Users,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-xl">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-bold text-blue-600">
                CodeCareer
              </h2>
            </div>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Connecting talent with opportunity. Find your dream job or hire
              top professionals with ease.
            </p>
          </div>

          {/* Candidates */}
          <div>
            <h3 className="font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <User size={18} /> Candidates
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="footer-link">Browse Jobs</Link>
              </li>
              <li>
                <Link to="/my-applications" className="footer-link">
                  My Applications
                </Link>
              </li>
              <li>
                <Link to="/profile" className="footer-link">My Profile</Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <Users size={18} /> Employers
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/addJob" className="footer-link flex items-center gap-1">
                  <PlusCircle size={14} /> Post a Job
                </Link>
              </li>
              <li>
                <Link to="/my-posted-jobs" className="footer-link">
                  My Posted Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Trust */}
          <div>
            <h3 className="font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <ShieldCheck size={18} /> Trust & Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="footer-link cursor-default">Privacy Policy</li>
              <li className="footer-link cursor-default">Terms of Service</li>
              <li className="footer-link cursor-default">Secure Platform</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-base-content/70">
          <p>© {new Date().getFullYear()} CodeCareer. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-blue-600 font-semibold">React</span>
          </p>
        </div>
      </div>

      {/* Reusable link style */}
      <style>
        {`
          .footer-link {
            color: hsl(var(--bc) / 0.7);
            transition: all 0.2s ease;
          }
          .footer-link:hover {
            color: #2563eb;
            padding-left: 4px;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
