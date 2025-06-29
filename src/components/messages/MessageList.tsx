import Image from 'next/image'
import { useEffect, useState } from 'react'

interface MessageListProps {
  selectedThread: number | null
  onSelectThread: (threadId: number) => void
}

interface ThreadSummary {
  id: number
  participants: string[]
  lastMessage: string
  lastTimestamp: string
}

export default function MessageList({ selectedThread, onSelectThread }: MessageListProps) {
  const [threads, setThreads] = useState<ThreadSummary[]>([])

  useEffect(() => {
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => setThreads(data))
      .catch(() => setThreads([]))
  }, [])

  return (
    <div className="w-96 bg-white border-r border-gray-200">
      <div className="p-4 border-b">
        <div className="relative">
          <input
            type="search"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div>
        {threads.map((thread) => (
          <div
            key={thread.id}
            className={`flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-blue-50 ${
              selectedThread === thread.id ? 'bg-blue-100' : ''
            }`}
            onClick={() => onSelectThread(thread.id)}
          >
            <Image
              src={`https://randomuser.me/api/portraits/men/${thread.id % 50 + 1}.jpg`}
              alt={thread.participants[0]}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">{thread.participants.join(', ')}</div>
              <div className="text-sm text-gray-500 truncate">{thread.lastMessage}</div>
            </div>
            <div className="text-xs text-gray-400">{new Date(thread.lastTimestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          </div>
        ))}
      </div>
    </div>
  )
}