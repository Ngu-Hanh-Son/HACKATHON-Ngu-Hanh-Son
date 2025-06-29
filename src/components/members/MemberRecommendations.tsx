import { useState, useEffect, useCallback } from 'react'
import MemberSwiper from './MemberSwiper'

import { Member } from '../../types/Member'

// Static current user profile for demo
const currentUserProfile = {
  id: 0,
  name: 'John Doe',
  role: 'Frontend Developer',
  skills: ['React', 'TypeScript', 'UI/UX'],
  availability: 'Weekday Afternoons',
  experience: 'Intermediate'
}

// Utility: Calculate similarity score between user and member
function calculateMatchScore(user: typeof currentUserProfile, member: Member): number {
  let score = 0
  // Skill overlap
  const skillOverlap = member.skills.filter(skill => user.skills.includes(skill)).length
  score += skillOverlap * 20
  // Role match
  if (user.role === member.role) score += 30
  // Availability match
  if (user.availability === member.availability) score += 10
  // Experience match
  if (user.experience === member.experience) score += 10
  return score
}

function getLocalStorageIds(key: string): number[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function setLocalStorageIds(key: string, ids: number[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(ids))
}

// Combine all hardcoded members from MemberList and MemberRecommendations
const [members, setMembers] = useState<Member[]>([])

useEffect(() => {
  fetch('/api/members')
    .then(res => res.json())
    .then(data => setMembers(data))
    .catch(() => setMembers([]))
}, [])
// (removed old hardcoded members array here)
// Utility: Calculate similarity score between user and member

export default function MemberRecommendations() {
  const [activeTab, setActiveTab] = useState('ai')
  const [likedIds, setLikedIds] = useState<number[]>([])
  const [passedIds, setPassedIds] = useState<number[]>([])
  const [recommendedMembers, setRecommendedMembers] = useState<Member[]>([])

  // Load liked/passed from localStorage on mount
  useEffect(() => {
    setLikedIds(getLocalStorageIds('member_liked'))
    setPassedIds(getLocalStorageIds('member_passed'))
  }, [])

  // Recompute recommendations when liked/passed changes
  useEffect(() => {
    // Filter out liked/passed
    const filtered = members.filter(
      m => !likedIds.includes(m.id) && !passedIds.includes(m.id)
    )
    // Score and sort
    const scored = filtered
      .map(m => ({ ...m, matchScore: calculateMatchScore(currentUserProfile, m) }))
      .sort((a, b) => (b.matchScore ?? 0) - (a.matchScore ?? 0))
      .map(m => ({ ...m, matchScore: m.matchScore ?? 0 })) // Ensure matchScore is always a number
    setRecommendedMembers(scored)
  }, [likedIds, passedIds])

  // Handle like/pass actions
  const handleLike = useCallback(async (member: Member) => {
    const updated = [...likedIds, member.id]
    setLikedIds(updated)
    setLocalStorageIds('member_liked', updated)
    // Call swipe API
    try {
      await fetch('/api/swipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUserProfile.id,
          memberId: member.id,
          action: 'like'
        })
      })
    } catch (err) {
      // Optionally handle error
      console.error('Failed to save like swipe', err)
    }
  }, [likedIds])

  const handlePass = useCallback(async (member: Member) => {
    const updated = [...passedIds, member.id]
    setPassedIds(updated)
    setLocalStorageIds('member_passed', updated)
    // Call swipe API
    try {
      await fetch('/api/swipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUserProfile.id,
          memberId: member.id,
          action: 'pass'
        })
      })
    } catch (err) {
      // Optionally handle error
      console.error('Failed to save pass swipe', err)
    }
  }, [passedIds])

  // Example: Call this to save a recommendation for a member
  const handleRecommend = useCallback(async (member: Member, reason: string) => {
    try {
      await fetch('/api/recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUserProfile.id,
          memberId: member.id,
          reason
        })
      })
    } catch (err) {
      // Optionally handle error
      console.error('Failed to save recommendation', err)
    }
  }, [])

  return (
    <div className="bg-white rounded-lg border">
      <div className="border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 px-4 py-4 text-sm font-medium text-center ${
              activeTab === 'ai'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            AI Recommendations
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`flex-1 px-4 py-4 text-sm font-medium text-center ${
              activeTab === 'recent'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Recently Active
          </button>
        </div>
      </div>

      <div className="p-6">
        <MemberSwiper
          members={recommendedMembers}
          onLike={handleLike}
          onPass={handlePass}
        />
      </div>
    </div>
  )
}