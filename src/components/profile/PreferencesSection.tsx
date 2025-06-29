export default function PreferencesSection() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Team Preferences</h3>
        <p className="mt-1 text-sm text-gray-500">
          Set your preferences for team collaboration and project types.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Preferred Team Size</label>
          <div className="mt-2 grid grid-cols-4 gap-3">
            {[2, 3, 4, '5+'].map((size) => (
              <button
                key={size}
                type="button"
                className="border rounded-lg py-2 text-sm font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600"
              >
                {size} Members
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Project Types</label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {[
              'Web Development',
              'Mobile Apps',
              'AI/ML',
              'Data Analysis',
              'UI/UX Design',
              'Research',
            ].map((type) => (
              <label
                key={type}
                className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:border-blue-600"
              >
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Availability</label>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              'Weekday Mornings',
              'Weekday Afternoons',
              'Weekday Evenings',
              'Weekends',
            ].map((time) => (
              <label
                key={time}
                className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:border-blue-600"
              >
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                <span className="text-sm text-gray-700">{time}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  )
}