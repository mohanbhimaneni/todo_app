'use client'

import { useEffect, useState } from 'react'

export default function TodoDetails({ todoId }: { todoId: string }) {
  const [todo, setTodo] = useState<any>(null)
  const [formData, setFormData] = useState({ title: '', description: '' })

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(`/api/todos/${todoId}`)
        const data = await response.json()
        setTodo(data)
        setFormData({ title: data.title, description: data.description })
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }
    
    if (todoId) fetchTodo()
  }, [todoId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/todos/${todoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        const updatedTodo = await response.json()
        setTodo(updatedTodo)
      }
    } catch (error) {
      console.error('Update error:', error)
    }
  }

  if (!todo) return <div className="text-gray-500">Select a todo to view details</div>

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full p-2 border rounded text-lg font-semibold"
      />
      <textarea
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full p-2 border rounded h-64 resize-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Save Changes
      </button>
    </form>
  )
}
