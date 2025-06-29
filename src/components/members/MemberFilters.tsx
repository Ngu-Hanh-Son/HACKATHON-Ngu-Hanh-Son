interface MemberFiltersProps {
  selectedFilters: {
    skills: string[]
    availability: string[]
    experience: string[]
    roles: string[]
  }
  setSelectedFilters: (filters: any) => void
}

export default function MemberFilters({ selectedFilters, setSelectedFilters }: MemberFiltersProps) {
  const filterCategories = {
    skills: [
      'JavaScript', 'Python', 'Java', 'React', 'Node.js',
      'UI/UX Design', 'Data Analysis', 'Machine Learning'
    ],
    roles: [
      'Frontend Developer', 'Backend Developer', 'UI Designer',
      'Project Manager', 'Data Scientist', 'Full Stack Developer'
    ],
    experience: [
      'Beginner', 'Intermediate', 'Advanced', 'Expert'
    ],
    availability: [
      'Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekends'
    ]
  }

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev: any) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item: string) => item !== value)
        : [...prev[category], value]
    }))
  }

  return (
    <div className="bg-white rounded-lg border p-6 space-y-6 sticky top-8">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        <p className="mt-1 text-sm text-gray-500">Refine your search results</p>
      </div>

      {Object.entries(filterCategories).map(([category, values]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 capitalize">
            {category}
          </h3>
          <div className="space-y-2">
            {values.map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedFilters[category as keyof typeof selectedFilters].includes(value)}
                  onChange={() => toggleFilter(category, value)}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{value}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}