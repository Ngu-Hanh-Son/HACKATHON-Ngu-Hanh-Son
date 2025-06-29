export default function TeamManager() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
          <p className="text-sm text-gray-500">Manage your project team</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: 'Sarah Chen',
            role: 'Frontend Lead',
            email: 'sarah.chen@example.com',
            tasks: { completed: 12, total: 15 }
          },
          {
            name: 'Michael Brown',
            role: 'Backend Developer',
            email: 'michael.b@example.com',
            tasks: { completed: 8, total: 10 }
          },
          {
            name: 'David Kim',
            role: 'UI Designer',
            email: 'david.kim@example.com',
            tasks: { completed: 5, total: 8 }
          }
        ].map((member, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Task Completion</span>
                <span className="font-medium text-gray-900">
                  {member.tasks.completed}/{member.tasks.total}
                </span>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(member.tasks.completed / member.tasks.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                View Profile
              </button>
              <button className="text-sm text-red-600 hover:text-red-800 font-medium">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}