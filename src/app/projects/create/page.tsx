import ProjectCreationForm from '@/components/projects/creation/ProjectCreationForm'

export default function ProjectCreationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create New Project</h1>
        <p className="mt-2 text-lg text-gray-600">
          Define your project details and team requirements to find the perfect teammates
        </p>
      </div>
      
      <ProjectCreationForm />
    </div>
  )
}