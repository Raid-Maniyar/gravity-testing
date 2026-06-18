import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaHome, FaHistory, FaWallet, FaUser, FaSignOutAlt, FaCarSide, FaChartBar, FaUsers } from 'react-icons/fa';

const DashboardLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Simulated role based on path for this demo
  let role = 'customer';
  if (path.includes('admin')) role = 'admin';
  if (path.includes('driver')) role = 'driver';

  const getLinks = () => {
    if (role === 'admin') {
      return [
        { name: 'Dashboard', path: '/dashboard/admin', icon: <FaChartBar /> },
        { name: 'Users', path: '#', icon: <FaUsers /> },
        { name: 'Drivers', path: '#', icon: <FaCarSide /> },
        { name: 'Settings', path: '#', icon: <FaUser /> },
      ];
    }
    if (role === 'driver') {
      return [
        { name: 'Dashboard', path: '/dashboard/driver', icon: <FaHome /> },
        { name: 'My Rides', path: '#', icon: <FaHistory /> },
        { name: 'Earnings', path: '#', icon: <FaWallet /> },
        { name: 'Profile', path: '#', icon: <FaUser /> },
      ];
    }
    return [
      { name: 'Book Ride', path: '/dashboard/customer', icon: <FaHome /> },
      { name: 'Ride History', path: '#', icon: <FaHistory /> },
      { name: 'Wallet', path: '#', icon: <FaWallet /> },
      { name: 'Profile', path: '#', icon: <FaUser /> },
    ];
  };

  const links = getLinks();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-300 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-dark-100 border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
              R
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              RickConnect
            </span>
          </Link>
        </div>
        
        <div className="px-4 py-2">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Menu</div>
          <nav className="space-y-1">
            {links.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.path}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
          <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
            <FaSignOutAlt />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white dark:bg-dark-100 border-b border-gray-200 dark:border-gray-800 h-16 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white capitalize">
            {role} Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-700 dark:text-primary-400 font-bold">
              U
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
