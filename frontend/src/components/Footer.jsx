import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-100 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                R
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                RickConnect
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              The smartest way to commute. Safe, affordable, and reliable rickshaw rides at your fingertips.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 transition-colors">Safety</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Get the App</h3>
            <div className="flex flex-col space-y-3">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <span>App Store</span>
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RickConnect Technologies Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
