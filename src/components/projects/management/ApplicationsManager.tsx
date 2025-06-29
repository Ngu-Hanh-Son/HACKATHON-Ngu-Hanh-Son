export default function ApplicationsManager() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Applications</h2>
          <p className="text-sm text-gray-500">Review and manage team applications</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="rounded-lg border border-gray-300 text-sm">
            <option>All Positions</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
          </select>
          <select className="rounded-lg border border-gray-300 text-sm">
            <option>All Status</option>
            <option>Pending</option>
            <option>Shortlisted</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applicant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applied
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              {
                name: 'Sarah Chen',
                email: 'sarah.chen@example.com',
                position: 'Frontend Developer',
                applied: '2024-03-01',
                status: 'Pending'
              },
              {
                name: 'Michael Brown',
                email: 'michael.b@example.com',
                position: 'Backend Developer',
                applied: '2024-03-02',
                status: 'Shortlisted'
              },
              {
                name: 'David Kim',
                email: 'david.kim@example.com',
                position: 'Frontend Developer',
                applied: '2024-03-03',
                status: 'Rejected'
              }
            ].map((applicant, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {applicant.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
                      <div className="text-sm text-gray-500">{applicant.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {applicant.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(applicant.applied).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`
                    px-2 py-1 text-xs font-medium rounded-full
                    ${applicant.status === 'Pending' && 'bg-yellow-100 text-yellow-800'}
                    ${applicant.status === 'Shortlisted' && 'bg-green-100 text-green-800'}
                    ${applicant.status === 'Rejected' && 'bg-red-100 text-red-800'}
                  `}>
                    {applicant.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}