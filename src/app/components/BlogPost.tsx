import Image from 'next/image'

interface BlogPostProps {
  title: string
  content: string
  imageUrl: string
}

export default function BlogPost({ title, content, imageUrl }: BlogPostProps) {
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={title} width={800} height={400} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-purple-300">{title}</h1>
        <div className="prose prose-invert max-w-none">
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

