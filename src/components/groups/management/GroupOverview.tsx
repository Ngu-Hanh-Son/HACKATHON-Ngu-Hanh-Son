import { Users, PieChart, Clock, AlertCircle } from 'lucide-react'

export default function GroupOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Groups</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-gray-500">Target: 15 groups</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-50 rounded-lg">
              <PieChart className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Formation Progress</p>
              <p className="text-2xl font-semibold text-gray-900">80%</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Time Remaining</p>
              <p className="text-2xl font-semibold text-gray-900">5 days</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-gray-500">Deadline: Mar 15, 2024</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-red-50 rounded-lg">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Issues</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-red-500">Requires attention</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New group formed', details: 'Team Alpha', time: '2 hours ago' },
              { action: 'Student reassigned', details: 'From Team Beta to Team Gamma', time: '4 hours ago' },
              { action: 'Group disbanded', details: 'Team Delta', time: '1 day ago' },
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Formation Issues</h3>
          <div className="space-y-4">
            {[
              { issue: 'Skill gap in Team Alpha', severity: 'High', status: 'Unresolved' },
              { issue: 'Schedule conflict in Team Beta', severity: 'Medium', status: 'In Progress' },
              { issue: 'Size imbalance in Team Gamma', severity: 'Low', status: 'Resolved' },
            ].map((issue, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{issue.issue}</p>
                  <p className="text-sm text-gray-500">Severity: {issue.severity}</p>
                </div>
                <span className={`
                  px-2 py-1 text-xs font-medium rounded-full
                  ${issue.status === 'Unresolved' 
                    ? 'bg-red-100 text-red-800' 
                    : issue.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                  }
                `}>
                  {issue.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}