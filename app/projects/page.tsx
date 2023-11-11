import Projects from '@/app/components/projects'
export const metadata = {
  title: 'Projects ',
  description: 'Freelance Web Developer.'
}

export default function ProjectPage() {
  return (
    <section>
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        <Projects />
      </main>
    </section>
  )
}
