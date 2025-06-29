import Image from 'next/image'
import { useState, useEffect } from 'react'

interface MessageThreadProps {
  threadId: number | null
}

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

interface Thread {
  id: number
  participants: string[]
  messages: Message[]
}

export default function MessageThread({ threadId }: MessageThreadProps) {
  const [message, setMessage] = useState('')
  const [thread, setThread] = useState<Thread | null>(null)

  useEffect(() => {
    if (!threadId) {
      setThread(null)
      return
    }
    fetch('/api/messages')
      .then(res => res.json())
      .then((data) => {
        // In the real API, we'd fetch a single thread, but here we filter client-side
        fetch('/api/messages')
          .then(res => res.json())
          .then((allThreads) => {
            const fullThread = allThreads.find((t: any) => t.id === threadId)
            setThread(fullThread || null)
          })
      })
      .catch(() => setThread(null))
  }, [threadId])

  if (!threadId || !thread) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No message selected</h3>
          <p className="mt-1 text-sm text-gray-500">Select a conversation to start messaging</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={`https://randomuser.me/api/portraits/men/${thread.id % 50 + 1}.jpg`}
              alt={thread.participants[0]}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-900">{thread.participants.join(', ')}</h2>
            <p className="text-xs text-green-600">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-50">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v4m3-4v4m3-4v4m5 3v4m0 4v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3m5 0v-4m3 4v-4m3 4v-4" />
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-50">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {Array.isArray(thread?.messages) && thread.messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === thread.participants[0] ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === thread.participants[0] ? 'bg-gray-100 text-gray-900' : 'bg-blue-600 text-white'}`}>
              <div className="text-xs mb-1">{msg.sender}</div>
              <div>{msg.content}</div>
              <div className="text-xs text-gray-400 mt-1">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Send</button>
      </div>
    </div>
  )
}