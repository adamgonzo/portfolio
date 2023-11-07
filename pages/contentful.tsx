'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

const BlogPage = () => {
  const [blogContent, setBlogContent] = useState<any>(null)

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/entries?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}&content_type=blogPage`
        )

        setBlogContent(response.data.items)
      } catch (error) {
        console.error('Error fetching blog content:', error)
      }
    }

    fetchBlogContent()
  }, [])

  return (
    <div>
      <h1>Blog Page</h1>
      {blogContent &&
        blogContent.map((blog: any) => (
          <div key={blog.sys.id}>
            <h2>{blog.fields.title}</h2>
            <p>{blog.fields.content}</p>
          </div>
        ))}
    </div>
  )
}

export default BlogPage
