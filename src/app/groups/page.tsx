import GroupManagementDashboard from '@/components/groups/management/GroupManagementDashboard'

export default function GroupManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Group Management</h1>
        <p className="mt-2 text-lg text-gray-600">
          Monitor group formation progress and manage team compositions
        </p>
      </div>
      
      <GroupManagementDashboard />
    </div>
  )
}