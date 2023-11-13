'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const projects = [
  { name: 'All Projects', slug: '' },
  { name: 'Portfolio', slug: 'portfolio' },
  { name: 'Terminal Recipes', slug: 'terminal-recipes' },
  { name: 'Lashes By Ally', slug: 'lashes-by-ally' },
  { name: 'Bay City', slug: 'bay-city' },
  { name: 'RBI Softball', slug: 'rbi-softball' }
]

const TopNav = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const closeDropdown = () => {
    setShowDropdown(false)
  }

  return (
    <section className="p-8 rounded-xl text-black dark:text-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto justify-center lg:w-full w-full">
        <div className="md:hidden relative">
          <div
            className="flex justify-center items-center border-2 border-white rounded-lg p-3 shadow-md active:translate-y-1 active:shadow-none cursor-pointer transition duration-200 shadow-black dark:shadow-white"
            onClick={toggleDropdown}
          >
            <span className="flex">Projects</span>
          </div>
          {showDropdown && (
            <div className="top-10 text-center right-0 mt-2 rounded-md w-full shadow-md shadow-black dark:shadow-white">
              {projects.map(project => (
                <Link
                  href={`/projects/${project.slug}`}
                  passHref
                  key={project.name}
                  onClick={closeDropdown}
                >
                  <div className="p-2 cursor-pointer hover:bg-gray-400 rounded-lg">
                    {project.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {projects.map(project => (
          <Link href={`/projects/${project.slug}`} passHref key={project.name}>
            <div className="hidden md:flex justify-center items-center border-2 dark:border-white border-black rounded-lg p-3 shadow-md dark:shadow-white active:translate-y-1 active:shadow-none cursor-pointer transition duration-200 shadow-black">
              <span className="flex">{project.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default TopNav
