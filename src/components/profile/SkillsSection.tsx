export default function SkillsSection() {
  const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'Python', 'Java', 'C++'] },
    { category: 'Web Technologies', items: ['React', 'Node.js', 'HTML/CSS', 'GraphQL'] },
    { category: 'Soft Skills', items: ['Team Leadership', 'Communication', 'Problem Solving'] },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Skills & Expertise</h3>
        <p className="mt-1 text-sm text-gray-500">
          Highlight your technical and soft skills to help find the perfect team match.
        </p>
      </div>

      <div className="space-y-8">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <h4 className="text-sm font-medium text-gray-700 mb-3">{skillGroup.category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50"
        >
          Add New Skill
        </button>
      </div>
    </div>
  )
}