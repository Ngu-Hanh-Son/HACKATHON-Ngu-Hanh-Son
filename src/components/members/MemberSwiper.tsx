import { useState } from 'react'
import MemberCard from './MemberCard'

import { Member } from '../../types/Member'

interface MemberSwiperProps {
  members: Member[]
  onLike?: (member: Member) => void
  onPass?: (member: Member) => void
}

export default function MemberSwiper({ members, onLike, onPass }: MemberSwiperProps) {
  const [current, setCurrent] = useState(0)
  const [liked, setLiked] = useState<Member[]>([])
  const [passed, setPassed] = useState<Member[]>([])

  if (members.length === 0) {
    return <div className="p-8 text-center text-gray-500">No members to show.</div>
  }

  const handleLike = () => {
    const member = members[current]
    setLiked([...liked, member])
    onLike?.(member)
    next()
  }

  const handlePass = () => {
    const member = members[current]
    setPassed([...passed, member])
    onPass?.(member)
    next()
  }

  const next = () => {
    setCurrent((prev) => prev + 1)
  }

  if (current >= members.length) {
    return (
      <div className="p-8 text-center">
        <div className="text-green-600 font-semibold mb-2">You have reviewed all recommendations!</div>
        <div className="text-gray-500">Liked: {liked.length} | Passed: {passed.length}</div>
      </div>
    )
  }

  const member = members[current]

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-md">
        <MemberCard member={member} />
      </div>
      <div className="flex gap-8 mt-6">
        <button
          onClick={handlePass}
          className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
        >
          Pass
        </button>
        <button
          onClick={handleLike}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Like
        </button>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        {current + 1} / {members.length}
      </div>
    </div>
  )
}