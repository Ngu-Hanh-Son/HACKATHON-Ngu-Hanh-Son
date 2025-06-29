import { Users, FolderKanban, MessageSquare, AlertTriangle } from 'lucide-react'

export default function AdminOverview() {
  const stats = [
    {
      name: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      changeType: 'increase',
      icon: Users,
      color: 'blue'
    },
    {
      name: 'Active Projects',
      value: '186',
      change: '+8.2%',
      changeType: 'increase',
      icon: FolderKanban,
      color: 'green'
    },
    {
      name: 'Messages',
      value: '1,429',
      change: '+23.1%',
      changeType: 'increase',
      icon: MessageSquare,
      color: 'purple'
    },
    {
      name: 'Issues',
      value: '12',
      change: '-5.4%',
      changeType: 'decrease',
      icon: AlertTriangle,
      color: 'red'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm"
          >
            <div className="flex items-center">
              <div className={`p-2 bg-${stat.color}-50 rounded-lg`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <span className={`text-${
                  stat.changeType === 'increase' ? 'green' : 'red'
                }-600 font-medium`}>
                  {stat.change}
                </span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New user registered', details: 'John Smith', time: '2 hours ago' },
              { action: 'Project created', details: 'AI Research Initiative', time: '4 hours ago' },
              { action: 'Team formed', details: 'Data Science Group', time: '1 day ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-600"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">
                    {activity.details} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="space-y-4">
            {[
              { metric: 'Server Uptime', value: '99.9%', status: 'Operational' },
              { metric: 'Response Time', value: '245ms', status: 'Optimal' },
              { metric: 'Error Rate', value: '0.02%', status: 'Nominal' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600">{item.metric}</span>
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-900">{item.value}</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}