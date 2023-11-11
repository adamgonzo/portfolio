import 'server-only'

import { queryBuilder } from 'lib/planetscale'
import { unstable_cache } from 'next/cache'

export const getBlogViews = unstable_cache(
  async () => {
    if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
      return 0
    }

    const data = await queryBuilder
      .selectFrom('views')
      .select(['count'])
      .execute()

    return data.reduce((acc, curr) => acc + Number(curr.count), 0)
  },
  ['blog-views-sum'],
  {
    revalidate: 5
  }
)

export const getViewsCount = unstable_cache(
  async () => {
    return queryBuilder.selectFrom('views').select(['slug', 'count']).execute()
  },
  ['all-views'],
  {
    revalidate: 5
  }
)
