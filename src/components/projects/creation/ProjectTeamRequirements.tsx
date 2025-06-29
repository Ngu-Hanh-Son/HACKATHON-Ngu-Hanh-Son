'use client'

interface ProjectTeamRequirementsProps {
  data: {
    requiredSkills: Array<{ skill: string; level: string }>
    teamSize: { min: number; max: number }
  }
  onChange: (data: Partial<ProjectTeamRequirementsProps['data']>) => void
}

const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

export default function ProjectTeamRequirements({ data, onChange }: ProjectTeamRequirementsProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Team Size
        </label>
        <div className="mt-2 flex items-center gap-4">
          <div>
            <label htmlFor="minSize" className="block text-sm text-gray-500">
              Minimum
            </label>
            <input
              type="number"
              id="minSize"
              min={2}
              max={data.teamSize.max}
              value={data.teamSize.min}
              onChange={(e) => onChange({
                teamSize: { ...data.teamSize, min: parseInt(e.target.value) }
              })}
              className="mt-1 block w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="maxSize" className="block text-sm text-gray-500">
              Maximum
            </label>
            <input
              type="number"
              id="maxSize"
              min={data.teamSize.min}
              max={10}
              value={data.teamSize.max}
              onChange={(e) => onChange({
                teamSize: { ...data.teamSize, max: parseInt(e.target.value) }
              })}
              className="mt-1 block w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Required Skills
        </label>
        <div className="mt-2 space-y-3">
          {data.requiredSkills.map((skillData, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  value={skillData.skill}
                  onChange={(e) => {
                    const newSkills = [...data.requiredSkills]
                    newSkills[index] = { ...skillData, skill: e.target.value }
                    onChange({ requiredSkills: newSkills })
                  }}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter required skill"
                />
              </div>
              <select
                value={skillData.level}
                onChange={(e) => {
                  const newSkills = [...data.requiredSkills]
                  newSkills[index] = { ...skillData, level: e.target.value }
                  onChange({ requiredSkills: newSkills })
                }}
                className="block w-40 rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                {SKILL_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  const newSkills = data.requiredSkills.filter((_, i) => i !== index)
                  onChange({ requiredSkills: newSkills })
                }}
                className="rounded-md p-2 text-gray-400 hover:text-gray-500"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange({
              requiredSkills: [...data.requiredSkills, { skill: '', level: 'Intermediate' }]
            })}
            className="mt-2 flex items-center text-sm text-blue-600 hover:text-blue-500"
          >
            <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Skill Requirement
          </button>
        </div>
      </div>
    </div>
  )
}