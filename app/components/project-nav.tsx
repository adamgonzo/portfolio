import React from 'react'
import Link from 'next/link'

const projects = [
  { name: 'All Projects', slug: '' },
  { name: 'Portfolio', slug: 'portfolio' },
  { name: 'Terminal Recipes', slug: 'terminal-recipes' },
  { name: 'Lashes By Ally', slug: 'lashes-by-ally' },
  { name: 'Bay City', slug: 'bay-city' },
  { name: 'Rbi Softball', slug: 'rbi-softball' }
]

const TopNav = () => {
  return (
    <section className="p-10 rounded-xl text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto justify-center w-full">
        {projects.map(project => (
          <Link href={`/projects/${project.slug}`} passHref key={project.name}>
            <div className="flex justify-center items-center border-2 border-white rounded-lg p-3 shadow-md dark:shadow-blue-300 active:translate-y-1 active:shadow-none cursor-pointer transition duration-200">
              <span className="flex">{project.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default TopNav
