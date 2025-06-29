import ProjectFilters from '@/components/projects/ProjectFilters'
import ProjectList from '@/components/projects/ProjectList'
import ProjectRecommendations from '@/components/projects/ProjectRecommendations'

export default function ProjectDiscoveryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Discover Projects</h1>
        <p className="mt-2 text-lg text-gray-600">
          Find the perfect project that matches your skills and interests
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProjectFilters />
        </div>
        
        <div className="lg:col-span-3">
          <ProjectRecommendations />
          <ProjectList />
        </div>
      </div>
    </div>
  )
}