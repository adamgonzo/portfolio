'use client'

import React, { useState, useEffect } from 'react'
import { Likes } from '@/components/icons'

type DevToArticle = {
  id: number
  title: string
  url: string
  description: string
  user: {
    name: string
  }
  published_at: string
  reading_time_minutes: number
  positive_reactions_count: number
}

const DevToPosts = () => {
  const [posts, setPosts] = useState<DevToArticle[]>([])

  useEffect(() => {
    fetch(`api/devto`, {
      headers: {
        'api-key': process.env.NEXT_PUBLIC_DEV_TO_KEY!
      }
    })
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold dark:text-blue-300 text-gray-800 text-center">
          Latest Articles
        </h2>

        <div className="mt-8 space-y-8">
          {posts.map(post => (
            <div
              className="dark:bg-gray-800 bg-white shadow border-2 dark:border-white border-black overflow-hidden sm:rounded-lg"
              key={post.id}
            >
              <div className="px-4 py-2 gap-4 sm:px-6 flex justify-between border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <b className="text-gray-500 dark:text-gray-400">
                  {post.published_at.substring(0, 10)}
                </b>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="ml-3 py-5">
                      <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300 mb-3">
                        {post.description}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Author: Adam Gonzalez
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      <Likes />
                    </div>
                    <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                      {post.positive_reactions_count}
                    </span>
                  </div>
                </div>

                <div className="mt-4 mb-4 flex">
                  <span>
                    Reading Time: {post.reading_time_minutes}{' '}
                    {post.reading_time_minutes === 1 ? 'min' : 'mins'}
                  </span>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-500"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DevToPosts
