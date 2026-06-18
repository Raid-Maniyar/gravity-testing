import { FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';

const CustomerDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
      {/* Booking Form */}
      <div className="glass-card p-6 flex flex-col h-full">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Book a Ride</h2>
        
        <form className="space-y-4 flex-1">
          <div className="relative">
            <div className="absolute top-3 left-3 text-green-500">
              <FaMapMarkerAlt />
            </div>
            <input 
              type="text" 
              placeholder="Enter pickup location" 
              className="input-field pl-10"
              defaultValue="Current Location"
            />
          </div>
          
          <div className="relative">
            <div className="absolute top-3 left-3 text-red-500">
              <FaLocationArrow />
            </div>
            <input 
              type="text" 
              placeholder="Where to?" 
              className="input-field pl-10"
            />
          </div>

          <div className="pt-4 space-y-3">
            <h3 className="font-medium text-gray-900 dark:text-white">Select Vehicle</h3>
            
            <label className="flex items-center justify-between p-3 border-2 border-primary-500 bg-primary-50 dark:bg-primary-900/20 rounded-xl cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="vehicle" defaultChecked className="text-primary-600 focus:ring-primary-500 h-4 w-4" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Auto Rickshaw</p>
                  <p className="text-xs text-gray-500">3 seats • 5 mins away</p>
                </div>
              </div>
              <p className="font-bold text-gray-900 dark:text-white">$4.50</p>
            </label>
            
            <label className="flex items-center justify-between p-3 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 rounded-xl cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <input type="radio" name="vehicle" className="text-primary-600 focus:ring-primary-500 h-4 w-4" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">E-Rickshaw</p>
                  <p className="text-xs text-gray-500">4 seats • Eco-friendly</p>
                </div>
              </div>
              <p className="font-bold text-gray-900 dark:text-white">$3.80</p>
            </label>
          </div>

          <button type="button" className="btn-primary w-full mt-auto shadow-lg shadow-primary-500/30 py-4 text-lg">
            Confirm Booking
          </button>
        </form>
      </div>

      {/* Map Area */}
      <div className="lg:col-span-2 glass-card overflow-hidden relative min-h-[400px]">
        {/* Placeholder for actual Map component */}
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
            alt="Map Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-30 mix-blend-overlay"
          />
          <FaMapMarkerAlt className="text-primary-500 text-6xl mb-4 relative z-10 animate-bounce" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white relative z-10">Live Map Integration</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md text-center mt-2 relative z-10 backdrop-blur-sm bg-white/50 dark:bg-dark-100/50 p-4 rounded-xl border border-white/20">
            Google Maps or OpenStreetMap will be rendered here to show live tracking of the rickshaw.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
