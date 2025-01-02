import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  id: number
  title: string
  description: string
  imageUrl: string
}

export default function BlogCard({ id, title, description, imageUrl }: BlogCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300  hover:scale-105">
      <Image src={imageUrl} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-purple-300">{title}</h2>
        <p className="text-gray-400 mb-4">{description.slice(0, 100)}...</p>
        <Link href={`/blog/${id}`} className=" bg-purple-600 text-white px-5 sm:px-20 py-2 justify-center items-center flex rounded-md hover:bg-purple-700 transition-colors duration-300">
          Read More
        </Link>
      </div>
    </div>
  )
}

