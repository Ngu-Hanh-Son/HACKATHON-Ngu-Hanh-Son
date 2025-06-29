import Image from 'next/image'

export default function ProfileHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-white">John Doe</h1>
            <p className="text-blue-100">Computer Science Student • Year 3</p>
            <div className="mt-2 flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Team Leader
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Available for Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}