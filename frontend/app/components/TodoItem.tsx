import Link from 'next/link'
import { Todo } from '@/types'

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <Link
      href={`?selected=${todo._id}`}
      scroll={false}
      className="block p-3 border rounded hover:bg-gray-50 transition-colors"
    >
      <h3 className="font-medium">{todo.title}</h3>
      <p className="text-sm text-gray-500 truncate">{todo.description}</p>
      <div className="text-xs text-gray-400 mt-1">
        {new Date(todo.createdAt).toLocaleDateString()}
      </div>
    </Link>
  )
}
