import Link from 'next/link'

type Props = {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: Props) {
  if (totalPages <= 1) return null
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i + 1}
          href={`?page=${i + 1}`}
          scroll={false}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  )
}
