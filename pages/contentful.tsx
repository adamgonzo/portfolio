'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
})

const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost'
        })
        setBlogs(response.items)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.sys.id}>
            <Link to={`/blog/${blog.sys.id}`}>
              <h2>{blog.fields.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
