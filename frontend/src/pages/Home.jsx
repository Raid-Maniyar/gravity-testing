import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white dark:bg-dark-200">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-dark-100 dark:to-dark-200 z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 text-sm font-semibold mb-6">
                  #1 Rickshaw Booking App
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
                  Your daily commute, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                    reinvented.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                  Fast, safe, and affordable rickshaw rides at your fingertips. Book instantly and track your ride in real-time.
                </p>
                
                <div className="glass-panel p-6 max-w-md">
                  <form className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pickup Location</label>
                      <input type="text" placeholder="Enter pickup location" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Dropoff Location</label>
                      <input type="text" placeholder="Where to?" className="input-field" />
                    </div>
                    <button type="button" className="btn-primary w-full mt-2">
                      See Prices
                    </button>
                  </form>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-3xl" />
                <div className="relative glass-card p-4 rounded-3xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1595166244583-42e391b1567c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Rickshaw App" 
                    className="rounded-2xl w-full h-[600px] object-cover"
                  />
                  
                  {/* Floating badge */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -left-8 top-1/4 glass-panel p-4 flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                      ★ 4.9
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Top Rated</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Drivers</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-dark-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16">How RickConnect Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: '1', title: 'Book a Ride', desc: 'Enter your destination and choose a ride option that fits your budget.' },
                { step: '2', title: 'Get Picked Up', desc: 'Your driver will arrive shortly. Track them in real-time on the map.' },
                { step: '3', title: 'Arrive Safely', desc: 'Pay seamlessly through the app and leave a rating for your driver.' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
