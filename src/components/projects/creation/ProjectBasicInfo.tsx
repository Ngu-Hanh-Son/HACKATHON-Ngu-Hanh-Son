'use client'

interface ProjectBasicInfoProps {
  data: {
    title: string
    description: string
    objectives: string[]
  }
  onChange: (data: Partial<ProjectBasicInfoProps['data']>) => void
}

export default function ProjectBasicInfo({ data, onChange }: ProjectBasicInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Project Title
        </label>
        <input
          type="text"
          id="title"
          value={data.title}
          onChange={(e) => onChange({ title: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Enter a clear, descriptive title for your project"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Project Description
        </label>
        <textarea
          id="description"
          rows={4}
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Describe your project's goals, scope, and expected outcomes"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Project Objectives
        </label>
        <div className="mt-2 space-y-2">
          {data.objectives.map((objective, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={objective}
                onChange={(e) => {
                  const newObjectives = [...data.objectives]
                  newObjectives[index] = e.target.value
                  onChange({ objectives: newObjectives })
                }}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder={`Objective ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => {
                  const newObjectives = data.objectives.filter((_, i) => i !== index)
                  onChange({ objectives: newObjectives })
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
            onClick={() => onChange({ objectives: [...data.objectives, ''] })}
            className="mt-2 flex items-center text-sm text-blue-600 hover:text-blue-500"
          >
            <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Objective
          </button>
        </div>
      </div>
    </div>
  )
}