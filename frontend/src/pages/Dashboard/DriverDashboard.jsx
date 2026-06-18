import { useState } from 'react';
import { FaMoneyBillWave, FaStar, FaRoute, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const DriverDashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="space-y-6">
      {/* Driver Status Banner */}
      <div className={`p-4 rounded-xl flex items-center justify-between ${isAvailable ? 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-gray-50 border border-gray-200 dark:bg-dark-200 dark:border-gray-700'}`}>
        <div>
          <h2 className={`text-lg font-bold ${isAvailable ? 'text-green-800 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'}`}>
            {isAvailable ? 'You are Online' : 'You are Offline'}
          </h2>
          <p className={`text-sm ${isAvailable ? 'text-green-600 dark:text-green-500' : 'text-gray-500'}`}>
            {isAvailable ? 'Waiting for ride requests...' : 'Go online to receive requests'}
          </p>
        </div>
        <button 
          onClick={() => setIsAvailable(!isAvailable)}
          className="text-4xl text-primary-500 hover:text-primary-600 transition-colors"
        >
          {isAvailable ? <FaToggleOn className="text-green-500" /> : <FaToggleOff className="text-gray-400" />}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Today's Earnings</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$84.50</h3>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-500">
              <FaMoneyBillWave size={24} />
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Rides</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12</h3>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-500">
              <FaRoute size={24} />
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Rating</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4.8</h3>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-yellow-500">
              <FaStar size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Active Requests */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">New Ride Requests</h3>
        
        {isAvailable ? (
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/50 dark:bg-dark-100/50">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-medium text-gray-900 dark:text-white">Central Mall</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="font-medium text-gray-900 dark:text-white">Airport Terminal 1</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Est. Distance: 12km • Time: 25 mins</p>
            </div>
            <div className="flex flex-col items-end gap-2 w-full md:w-auto">
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">$18.50</p>
              <div className="flex gap-2 w-full">
                <button className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium transition-colors">
                  Decline
                </button>
                <button className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-md shadow-primary-500/30">
                  Accept
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Go online to see ride requests
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard;
