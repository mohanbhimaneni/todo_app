import TodoList from '@/components/TodoList'
import AddTodoForm from '@/components/AddTodoForm'

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { page?: string; selected?: string }
}) {
  const currentPage = parseInt(searchParams.page || '1')

  return (
    <>
      <div className="md:col-span-1 space-y-6">
        <AddTodoForm />
        <TodoList page={currentPage} />
      </div>
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
        {/* TodoDetails will be implemented in client component */}
      </div>
    </>
  )
}
