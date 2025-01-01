
'use client'

import { useState, useEffect } from 'react'

interface Comment {
  name: string;
  comment: string;
  id: number;
}

export default function CommentBox() {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    // Load comments from local storage when the component mounts
    const savedComments = localStorage.getItem('comments')
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newComment = { name, comment, id: Date.now() }
    const updatedComments = [...comments, newComment]
    setComments(updatedComments)
    localStorage.setItem('comments', JSON.stringify(updatedComments))
    setName('')
    setComment('')
  }

  return (
    <div className="mt-8 bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600  text-white focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-400">Comment</label>
          <textarea
            id="comment"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          ></textarea>
        </div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
          Submit Comment
        </button>
      </form>

<div className="mt-12 mb-20 space-y-10">
      <div className="flex flex-col  ">
        <h1 className="font-bold text-2xl text-purple-400 mb-5 underline underline-offset-4">User Comments:</h1>
  <div className="flex flex-row items-center space-x-2">
    <h1 className="font-bold text-purple-500">Name:</h1>
    <p>Asad</p>
  </div>
  <p className="text-purple-300 font-semibold mt-2">Great insights! Thanks for sharing.</p>
</div>


<div className="flex flex-col ">
  <div className="flex flex-row items-center space-x-2">
    <h1 className="font-bold text-purple-500">Name:</h1>
    <p>Ali</p>
  </div>
  <p className="text-purple-300 font-semibold mt-2">Looking forward to your next update!</p>
</div>

<div className="flex flex-col ">
  <div className="flex flex-row items-center space-x-2">
    <h1 className="font-bold text-purple-500">Name:</h1>
    <p>Fatima</p>
  </div>
  <p className="text-purple-300 font-semibold mt-2">Great work! Keep it up!</p>
</div>

<div className="flex flex-col ">
  <div className="flex flex-row items-center space-x-2">
    <h1 className="font-bold text-purple-500">Name:</h1>
    <p>Ahmed</p>
  </div>
  <p className="text-purple-300 font-semibold mt-2">Super helpful, thank you!</p>
</div>
</div>


      {comments.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-purple-300 underline underline-offset-8 ">Recent Comments</h3>
          <ul className="space-y-4">
            {comments.map((c) => (
              <li key={c.id} className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-purple-300 border-b-2 border-purple-400 mb-5">NAME: {c.name}</h4>
                <p className="text-gray-300">{c.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}





