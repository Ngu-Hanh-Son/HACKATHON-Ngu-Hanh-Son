import Link from 'next/link'

export default function MessageSidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
          <p className="text-sm text-gray-500">Manage your conversations</p>
        </div>

        <div className="space-y-2">
          <Link 
            href="/messages"
            className="block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
          >
            All Messages
          </Link>
          <Link 
            href="/messages?filter=unread"
            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            Unread
          </Link>
          <Link 
            href="/messages?filter=archived"
            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            Archived
          </Link>
        </div>

        <div className="pt-4 border-t">
          <button
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            New Message
          </button>
        </div>
      </div>
    </div>
  )
}