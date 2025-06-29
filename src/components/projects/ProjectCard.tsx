import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    skills: string[]
    teamSize: string
    deadline: string
    openPositions: string[]
    image: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <span className="font-medium">Team Size:</span>
            <span className="ml-2">{project.teamSize} members</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Deadline:</span>
            <span className="ml-2">{new Date(project.deadline).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <h4 className="font-medium text-gray-900">Open Positions:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {project.openPositions.map((position) => (
              <li key={position}>{position}</li>
            ))}
          </ul>
        </div>
        
        <Link
          href={`/projects/${project.id}`}
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}