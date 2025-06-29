export default function GroupSkillGapAnalysis() {
  const skillGaps = [
    {
      category: 'Technical Skills',
      skills: [
        { name: 'React Development', required: 3, current: 2, gap: -1 },
        { name: 'Database Design', required: 2, current: 3, gap: 1 },
        { name: 'API Development', required: 2, current: 2, gap: 0 },
      ]
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Project Management', required: 2, current: 1, gap: -1 },
        { name: 'Communication', required: 3, current: 3, gap: 0 },
        { name: 'Problem Solving', required: 3, current: 2, gap: -1 },
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Skill Gap Analysis</h2>
        <p className="mt-1 text-sm text-gray-500">
          Identify skill gaps and areas for improvement within the team
        </p>
      </div>

      <div className="space-y-8">
        {skillGaps.map((category) => (
          <div key={category.category} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-md font-medium text-gray-900 mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className={`text-sm font-medium ${
                      skill.gap < 0 ? 'text-red-600' : skill.gap > 0 ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {skill.gap < 0 ? `${skill.gap}` : skill.gap > 0 ? `+${skill.gap}` : 'Balanced'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-grow">
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div
                          className={`h-2 rounded-full ${
                            skill.gap < 0 ? 'bg-red-500' : skill.gap > 0 ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${(skill.current / skill.required) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {skill.current}/{skill.required}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}