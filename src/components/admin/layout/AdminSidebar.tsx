'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban,
  MessageSquare,
  Settings,
  BarChart2,
  Shield
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'User Management', href: '/admin/users', icon: Users },
  { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
  { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { name: 'Security', href: '/admin/security', icon: Shield },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`bg-white border-r border-gray-200 ${
      isCollapsed ? 'w-20' : 'w-64'
    } transition-all duration-300 ease-in-out`}>
      <div className="h-[calc(100vh-4rem)] p-4 flex flex-col">
        <nav className="space-y-1 flex-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <item.icon className={`h-5 w-5 ${
                  isActive ? 'text-blue-600' : 'text-gray-400'
                }`} />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mt-auto flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
    </div>
  )
}