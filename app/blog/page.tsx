import DevToPosts from '@/pages/dev'

export const metadata = {
  title: 'Blog',
  description: 'Blog on Dev.to website'
}

export default function BlogsPage() {
  return (
    <section>
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        <DevToPosts />
      </main>
    </section>
  )
}
