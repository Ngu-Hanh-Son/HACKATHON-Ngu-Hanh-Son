export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Team Leader',
      project: 'E-commerce Platform',
      duration: 'Sep 2023 - Dec 2023',
      description: 'Led a team of 5 members to develop a full-stack e-commerce platform using React and Node.js.',
    },
    {
      role: 'Frontend Developer',
      project: 'Student Portal',
      duration: 'Jan 2023 - Apr 2023',
      description: 'Collaborated with 3 team members to redesign and implement the university student portal interface.',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Project Experience</h3>
        <p className="mt-1 text-sm text-gray-500">
          Share your past project experiences and team collaborations.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-base font-medium text-gray-900">{exp.role}</h4>
                <p className="text-sm text-blue-600">{exp.project}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50"
        >
          Add Experience
        </button>
      </div>
    </div>
  )
}