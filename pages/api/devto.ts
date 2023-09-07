import type { NextApiRequest, NextApiResponse } from 'next'

type DevToArticle = {
  id: number
  title: string
  url: string
  description: string
  user: {
    name: string
    profile_image: string
  }
  published_at: string
  reading_time_minutes: number

  positive_reactions_count: number
}

type DevToApiResponse = DevToArticle[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DevToApiResponse>
) {
  const response = await fetch('https://dev.to/api/articles/me', {
    headers: {
      'api-key': process.env.NEXT_PUBLIC_DEV_TO_KEY || ' '
    }
  })

  if (!response.ok) {
    return res.status(response.status).end()
  }

  const data = await response.json()

  res.status(200).json(data)
}
