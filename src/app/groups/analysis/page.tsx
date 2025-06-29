import GroupAnalyticsDashboard from '@/components/groups/analysis/GroupAnalyticsDashboard'

export default function GroupAnalysisPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Group Analysis</h1>
        <p className="mt-2 text-lg text-gray-600">
          Analyze team performance, skills, and dynamics with AI-powered insights
        </p>
      </div>
      
      <GroupAnalyticsDashboard />
    </div>
  )
}