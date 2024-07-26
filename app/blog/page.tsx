import { allBlogs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.'
}

type BlogPost = {
  slug: string
  title: string
  publishedAt: string
}

export default function BlogPage() {
  const sortedBlogs = allBlogs.sort(
    (a: BlogPost, b: BlogPost) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Blog Posts
      </h1>
      {sortedBlogs.map((post: BlogPost) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="flex flex-col space-y-2 mb-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <div className="w-full flex flex-col">
            <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </Link>
      ))}
    </section>
  )
}
