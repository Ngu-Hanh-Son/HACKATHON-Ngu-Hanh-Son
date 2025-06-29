'use client'

import { useState } from 'react'
import MessageList from '@/components/messages/MessageList'
import MessageThread from '@/components/messages/MessageThread'
import MessageSidebar from '@/components/messages/MessageSidebar'

export default function MessagesPage() {
  const [selectedThread, setSelectedThread] = useState<number | null>(null)

  return (
    <div className="h-[calc(100vh-4rem)] flex bg-gray-50">
      <MessageSidebar />
      <div className="flex-1 flex">
        <MessageList 
          selectedThread={selectedThread}
          onSelectThread={setSelectedThread}
        />
        <MessageThread threadId={selectedThread} />
      </div>
    </div>
  )
}