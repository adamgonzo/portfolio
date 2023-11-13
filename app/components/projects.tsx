'use client'

import React from 'react'
import Image from 'next/image'
//picture imports
import portfolioImg from 'public/images/projects/port.png'
import BayCity from 'public/images/projects/BayCity.png'
import { GitHubIcon, BoxArrow } from '@/app/components/icons'
import Link from 'next/link'

export default function Projects() {
  return (
    <section
      className="font-sans max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      id="projects-info"
    >
      <div className="grid grid-cols-1 gap-8 ">
        <article className="dark:bg-[#667d9b] rounded-lg border-2 border-gray-300 p-4 shadow-md dark:shadow-white shadow-black">
          <div className="flex flex-col">
            <h2 className="text-center text-2xl font-bold dark:text-yellow-600 mb-4 leading-tight">
              Portfolio Website
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={portfolioImg}
                alt="Portfolio screenshot"
                className="rounded-lg"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="flex justify-between">
              <Link
                href="https://github.com/adamgonzo/portfolio"
                className="flex mt-auto text-gray-700 dark:text-emerald-200 gap-3 hover:scale-105 hover:text-red-400"
              >
                <GitHubIcon />
                Source Code
              </Link>
              <Link
                href="/blog/Portfolio"
                className="flex items-center text-gray-700 dark:text-emerald-200 hover:text-red-400 gap-3 hover:scale-105"
              >
                <BoxArrow /> More Info
              </Link>
            </div>
          </div>
        </article>
        <article className="flex dark:bg-[#667d9b] border-2 border-gray-300 rounded-lg p-4 shadow-md shadow-black dark:shadow-white">
          <div className="flex flex-col">
            <h2 className="text-center text-2xl font-bold dark:text-yellow-600 mb-4 leading-tight">
              Recipes From The Terminal
            </h2>
            <div className="flex justify-center mb-4">
              <video controls>
                <source
                  src="/videos/RecipesFromTheTerminal.mp4"
                  width={400}
                  height={400}
                />
              </video>
            </div>
            <div className="flex justify-between items-center">
              <Link
                href="https://github.com/adamgonzo/Recipes_from_terminal"
                className="flex text-gray-700 dark:text-emerald-200 hover:scale-105 hover:text-red-400 items-center gap-3"
              >
                <GitHubIcon />
                Source Code
              </Link>

              <Link
                href="/blog/Portfolio"
                className="flex items-center text-gray-700 dark:text-emerald-200 hover:text-red-400 gap-3 hover:scale-105"
              >
                <BoxArrow />
                More Info
              </Link>
            </div>
          </div>
        </article>
        <article className="flex bg-white dark:bg-[#667d9b] border-2 border-gray-300 rounded-lg p-4 shadow-md shadow-black dark:shadow-white">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-yellow-600 text-center leading-tight">
              Bay City General Glass
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={BayCity}
                alt="Bay City General Glass"
                className="rounded-lg"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="flex justify-between">
              <Link
                href="https://github.com/adamgonzo/Bay-City-New-Site"
                className="flex text-gray-700 dark:text-emerald-300 hover:scale-105 hover:text-red-400 gap-3"
              >
                <GitHubIcon />
                Source Code
              </Link>
              <Link
                href="/blog/BayCity"
                className="flex text-gray-700 dark:text-emerald-300 hover:scale-105 hover:text-red-400 gap-3"
              >
                <BoxArrow />
                More Info
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
