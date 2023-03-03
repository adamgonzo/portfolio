'use client'

import React, { useState, useEffect } from 'react'
import { DeleteLeft, GitHubIcon } from './icons'

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProjects, setFilteredProjects] = useState<any[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/adamgonzo/repos')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  useEffect(() => {
    const filteredProjects = projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProjects(filteredProjects)
  }, [searchTerm, projects])

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearchTerm(event.target.value)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <div className="font-sans">
      <div className="flex justify-center mx-auto w-full max-w-sm md:max-w-800">
        <input
          type="text"
          className="flex-grow-1 p-0-5 text-lg text-center rounded-lg text-black p-2 mr-3 my-4 focus:text-left focus:placeholder-opacity-0"
          placeholder="Search for a project"
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm !== '' && (
          <button className="text-lg p-2 rounded-r-md" onClick={clearSearch}>
            <DeleteLeft />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 p-3.5 my-4 mx-auto justify-center items-center text-center self-center -ml-8">
        {filteredProjects.map((project, index) => (
          <div
            className="border-4 border-gray-300 w-full h-full px-5 py-5 m-4 transition ease-in-out duration-200 rounded-lg dark:hover:bg-gray-500 hover:bg-neutral-100 cursor-pointer transform scale-100 shadow-lg hover:shadow-xl"
            onClick={() => (window.location.href = project.html_url)}
            key={project.id || index}
          >
            <h2 className="text-base mb-3 font-medium">{project.name}</h2>
            <p className="text-sm mb-3 dark:text-gray-300">
              {project.description}
            </p>
            <p className="flex gap-8 justify-center m-3">
              <GitHubIcon />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
