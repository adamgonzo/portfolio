import Projects from '@/components/Project-UI/projects'

export const metadata = {
  title: 'Projects ',
  description: 'Freelance Web Developer.'
}

export default function ProjectPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-5 text-center border-b border-gray-400 dark:shadow-md mx-auto">
        Projects
      </h1>
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        <Projects />
      </main>
    </section>
  )
}
