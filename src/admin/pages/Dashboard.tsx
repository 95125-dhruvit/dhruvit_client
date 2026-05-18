import { motion } from "framer-motion";
import {
  Users,
  Activity,
  DollarSign,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Database,
  Server,
  ShieldCheck,
  Clock3,
} from "lucide-react";

interface StatCard {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: any;
}

const stats: StatCard[] = [
  {
    title: "Total Users",
    value: "1,245",
    change: "+12%",
    positive: true,
    icon: Users,
  },
  {
    title: "Active Sessions",
    value: "312",
    change: "+5%",
    positive: true,
    icon: Activity,
  },
  {
    title: "Revenue",
    value: "$8,420",
    change: "+18%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Errors",
    value: "23",
    change: "-4%",
    positive: false,
    icon: AlertTriangle,
  },
];

const activities = [
  {
    title: "New user registered",
    time: "2 min ago",
  },
  {
    title: "Payment received successfully",
    time: "18 min ago",
  },
  {
    title: "API request spike detected",
    time: "1 hour ago",
  },
  {
    title: "Database backup completed",
    time: "3 hours ago",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1
            className="text-3xl md:text-4xl font-bold 
                       text-gray-900 dark:text-white"
          >
            Dashboard
          </h1>

          <p
            className="text-sm md:text-base mt-2 
                       text-gray-500 dark:text-gray-400"
          >
            Overview of your platform analytics and system health
          </p>
        </div>

        <div
          className="flex items-center gap-2 self-start 
                     px-4 py-2 rounded-2xl
                     border border-blue-200/60 dark:border-blue-500/20
                     bg-gradient-to-r from-blue-500/10 to-cyan-500/10
                     backdrop-blur-xl"
        >
          <Clock3 className="w-4 h-4 text-blue-500" />

          <span className="text-sm text-gray-700 dark:text-gray-300">
            Updated just now
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-gray-200/70 dark:border-white/10
                bg-white/70 dark:bg-[#10131a]/80
                backdrop-blur-2xl
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]
              "
            >

              {/* Top glow */}
              <div
                className="absolute top-0 left-0 w-full h-[3px]
                           bg-gradient-to-r from-blue-500 to-cyan-400"
              />

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>

                  <h3
                    className="mt-4 text-3xl font-bold
                               text-gray-900 dark:text-white"
                  >
                    {item.value}
                  </h3>
                </div>

                <div
                  className="
                    h-12 w-12 rounded-2xl
                    flex items-center justify-center
                    bg-blue-500/10
                    border border-blue-500/10
                  "
                >
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div
                  className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full
                    ${
                      item.positive
                        ? "bg-green-500/10 text-green-500"
                        : "bg-red-500/10 text-red-500"
                    }`}
                >
                  {item.positive ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}

                  {item.change}
                </div>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  vs last month
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Grid */}
      <div className="grid xl:grid-cols-3 gap-6">

        {/* Activity */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            xl:col-span-2
            rounded-[30px]
            border border-gray-200/70 dark:border-white/10
            bg-white/70 dark:bg-[#10131a]/80
            backdrop-blur-2xl
            overflow-hidden
          "
        >
          <div
            className="px-6 py-5 border-b
                       border-gray-200/70 dark:border-white/10
                       flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Latest platform actions and updates
              </p>
            </div>

            <button
              className="
                px-4 py-2 rounded-xl text-sm
                bg-blue-500 text-white
                hover:bg-blue-600
                transition
              "
            >
              View All
            </button>
          </div>

          <div className="p-6 space-y-4">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-between
                  p-4 rounded-2xl
                  border border-gray-200/70 dark:border-white/10
                  bg-white/50 dark:bg-white/[0.03]
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      h-10 w-10 rounded-xl
                      bg-blue-500/10
                      flex items-center justify-center
                    "
                  >
                    <Activity className="w-4 h-4 text-blue-500" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      System event
                    </p>
                  </div>
                </div>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            rounded-[30px]
            border border-gray-200/70 dark:border-white/10
            bg-white/70 dark:bg-[#10131a]/80
            backdrop-blur-2xl
            p-6
          "
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              System Status
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Live server and infrastructure state
            </p>
          </div>

          <div className="mt-6 space-y-4">

            <div
              className="
                flex items-center justify-between
                p-4 rounded-2xl
                bg-green-500/10
                border border-green-500/10
              "
            >
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5 text-green-500" />

                <span className="text-sm text-gray-900 dark:text-white">
                  API Server
                </span>
              </div>

              <span className="text-xs font-medium text-green-500">
                Online
              </span>
            </div>

            <div
              className="
                flex items-center justify-between
                p-4 rounded-2xl
                bg-blue-500/10
                border border-blue-500/10
              "
            >
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-blue-500" />

                <span className="text-sm text-gray-900 dark:text-white">
                  Database
                </span>
              </div>

              <span className="text-xs font-medium text-blue-500">
                Connected
              </span>
            </div>

            <div
              className="
                flex items-center justify-between
                p-4 rounded-2xl
                bg-yellow-500/10
                border border-yellow-500/10
              "
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-yellow-500" />

                <span className="text-sm text-gray-900 dark:text-white">
                  Server Load
                </span>
              </div>

              <span className="text-xs font-medium text-yellow-500">
                Moderate
              </span>
            </div>

          </div>
        </motion.div>

      </div>

    </div>
  );
}