import ProjectManagementDashboard from '@/components/projects/management/ProjectManagementDashboard'

export default function ProjectManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
        <p className="mt-2 text-lg text-gray-600">
          Manage your projects, review applications, and track team progress
        </p>
      </div>
      
      <ProjectManagementDashboard />
    </div>
  )
}