export default function ProjectRecommendations() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Recommended for You
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-start">
            <div className="flex-grow">
              <h3 className="font-medium text-gray-900">
                Full-Stack E-commerce Platform
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Matches your React and Node.js skills
              </p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              98% Match
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-start">
            <div className="flex-grow">
              <h3 className="font-medium text-gray-900">
                Mobile App Development
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Aligns with your UI/UX interests
              </p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              95% Match
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}