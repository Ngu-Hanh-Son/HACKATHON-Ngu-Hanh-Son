import { PieChart, BarChart, ArrowUpRight, Users, Clock } from 'lucide-react'

export default function ProjectOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Team Members</p>
              <p className="text-2xl font-semibold text-gray-900">8/10</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+2 this week</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <PieChart className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Task Completion</p>
              <p className="text-2xl font-semibold text-gray-900">68%</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-50 rounded-lg">
              <BarChart className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Open Positions</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-gray-500">Frontend (1), Backend (1)</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-rose-50 rounded-lg">
              <Clock className="h-6 w-6 text-rose-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Time Remaining</p>
              <p className="text-2xl font-semibold text-gray-900">18 days</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-gray-500">Deadline: Mar 31, 2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New team member joined', user: 'Sarah Chen', time: '2 hours ago' },
              { action: 'Task completed', user: 'Michael Brown', time: '4 hours ago' },
              { action: 'New application received', user: 'David Kim', time: '1 day ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-600"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">
                    {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Milestones</h3>
          <div className="space-y-4">
            {[
              { title: 'Frontend MVP', date: 'Mar 15, 2024', status: 'In Progress' },
              { title: 'Backend Integration', date: 'Mar 22, 2024', status: 'Planned' },
              { title: 'User Testing', date: 'Mar 28, 2024', status: 'Planned' },
            ].map((milestone, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{milestone.title}</p>
                  <p className="text-sm text-gray-500">{milestone.date}</p>
                </div>
                <span className={`
                  px-2 py-1 text-xs font-medium rounded-full
                  ${milestone.status === 'In Progress' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-800'
                  }
                `}>
                  {milestone.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}