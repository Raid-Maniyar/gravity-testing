import { FaChartLine, FaUsers, FaCarSide, FaMoneyBillWave } from 'react-icons/fa';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$12,426', icon: <FaMoneyBillWave className="text-green-500 text-2xl" />, change: '+14%' },
    { title: 'Total Users', value: '2,845', icon: <FaUsers className="text-blue-500 text-2xl" />, change: '+5%' },
    { title: 'Active Drivers', value: '342', icon: <FaCarSide className="text-primary-500 text-2xl" />, change: '+12%' },
    { title: 'Total Rides', value: '15,893', icon: <FaChartLine className="text-purple-500 text-2xl" />, change: '+22%' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-dark-200 rounded-lg">
                {stat.icon}
              </div>
            </div>
            <div className="text-sm">
              <span className="text-green-500 font-medium">{stat.change}</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 min-h-[400px]">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Revenue Overview</h3>
          <div className="flex items-center justify-center h-[300px] border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
            <p className="text-gray-500 dark:text-gray-400">Chart will be rendered here</p>
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Bookings</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Ride #{1024 + i}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 mins ago</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Completed</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
