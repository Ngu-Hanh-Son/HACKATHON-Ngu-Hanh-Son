import Link from 'next/link'
 
import { usePathname } from 'next/navigation'
 
export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TeamFinder
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
          <Link href="/discover/pal" className="text-gray-600 hover:text-gray-900">
            Find Pal
          </Link>
          <Link href="/discover/project" className="text-gray-600 hover:text-gray-900">
            Find Project
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </Link>
          <Link href="/groups" className="text-gray-600 hover:text-gray-900">
            Groups
          </Link>
          <Link href="/messages" className="text-gray-600 hover:text-gray-900">
            Messages
          </Link>
          <Link href="/profile" className="text-gray-600 hover:text-gray-900">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  )
}