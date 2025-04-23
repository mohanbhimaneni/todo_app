import { Todo } from '@/types'
import TodoItem from './TodoItem'
import Pagination from './Pagination'

export default async function TodoList({ page }: { page: number }) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/todos?page=${page}`,
    { next: { revalidate: 10 } }
  )
  
  if (!response.ok) throw new Error('Failed to fetch todos')
  
  const { todos, totalPages } = await response.json()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Your Todos</h2>
      <div className="space-y-2">
        {todos.map((todo: Todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={page} />
    </div>
  )
}
