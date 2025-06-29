import MemberCard from './MemberCard'

interface MemberListProps {
  searchQuery: string
  selectedFilters: {
    skills: string[]
    availability: string[]
    experience: string[]
    roles: string[]
  }
}

export default function MemberList({ searchQuery, selectedFilters }: MemberListProps) {
  // Dummy data for demonstration
  const members = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      skills: ['React', 'TypeScript', 'UI/UX'],
      availability: 'Weekday Afternoons',
      experience: 'Advanced',
      matchScore: 95
    },
    {
      id: 2,
      name: 'Michael Park',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      skills: ['Node.js', 'Python', 'MongoDB'],
      availability: 'Weekends',
      experience: 'Expert',
      matchScore: 88
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium text-gray-900">Available Members</h2>
        <p className="mt-1 text-sm text-gray-500">
          Connect with potential team members that match your requirements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}