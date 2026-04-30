import { motion } from "framer-motion";

interface StatCard {
  title: string;
  value: string;
  change: string;
}

const stats: StatCard[] = [
  { title: "Total Users", value: "1,245", change: "+12%" },
  { title: "Active Sessions", value: "312", change: "+5%" },
  { title: "Revenue", value: "$8,420", change: "+18%" },
  { title: "Errors", value: "23", change: "-4%" },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Overview of your system performance and activity
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 
                       bg-white/60 dark:bg-white/5 backdrop-blur-sm"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.title}
            </p>

            <div className="flex items-end justify-between mt-3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {item.value}
              </h3>
              <span className="text-xs text-green-500">
                {item.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activity Section */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
                        bg-white/60 dark:bg-white/5">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li>• New user registered</li>
            <li>• Payment received</li>
            <li>• API request spike detected</li>
            <li>• Database backup completed</li>
          </ul>
        </div>

        {/* System Status */}
        <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
                        bg-white/60 dark:bg-white/5">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            System Status
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">API</span>
              <span className="text-green-500">Online</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Database</span>
              <span className="text-green-500">Connected</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Server Load</span>
              <span className="text-yellow-500">Moderate</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}