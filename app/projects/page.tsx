import Image from 'next/image'
import Link from 'next/link'
import { GitHubIcon, BoxArrow } from '@/app/components/icons'
import { port, rbi, lashes, bayCity } from 'public/images/projects'

const projects = [
  {
    title: 'Portfolio Website',
    imgSrc: port,
    githubLink: 'https://github.com/adamgonzo/portfolio',
    moreInfoLink: '/blog/Portfolio'
  },
  {
    title: 'Recipes From The Terminal',
    videoSrc: '/videos/RecipesFromTheTerminal.mp4',
    githubLink: 'https://github.com/adamgonzo/Recipes_from_terminal',
    moreInfoLink: '/blog/recipesFromTheTerminal'
  },
  {
    title: 'Bay City General Glass',
    imgSrc: bayCity,
    githubLink: 'https://github.com/adamgonzo/Bay-City-New-Site',
    moreInfoLink: '/blog/BayCity'
  },
  {
    title: 'RBI Softball',
    imgSrc: rbi,
    githubLink: 'https://github.com/adamgonzo/RBI-Softball',
    moreInfoLink: '/blog/RBISoftball'
  },
  {
    title: 'LashedUpAlly',
    imgSrc: lashes,
    githubLink: 'https://github.com/adamgonzo/RBI-Softball', // Note: Replace with the correct link
    moreInfoLink: '/blog/Lashes'
  }
]

export const metadata = {
  title: 'Projects',
  description: 'Freelance Web Developer.'
}

export default function ProjectPage() {
  return (
    <section>
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        <section
          className="font-sans max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
          id="projects-info"
        >
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="flex dark:bg-[#667d9b] bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md dark:shadow-white shadow-black"
              >
                <div className="flex flex-col">
                  <h2 className="text-center text-2xl font-bold dark:text-yellow-600 mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex justify-center mb-4">
                    {project.imgSrc && (
                      <Image
                        src={project.imgSrc}
                        alt={`${project.title} screenshot`}
                        className="rounded-lg"
                        width={1000}
                        height={1000}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    {project.videoSrc && (
                      <video controls>
                        <source
                          src={project.videoSrc}
                          width={400}
                          height={400}
                        />
                      </video>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href={project.githubLink}
                      className="flex text-gray-700 dark:text-emerald-200 hover:scale-105 hover:text-red-400 items-center gap-3"
                    >
                      <GitHubIcon />
                      Source Code
                    </Link>
                    <Link
                      href={project.moreInfoLink}
                      className="flex items-center text-gray-700 dark:text-emerald-200 hover:text-red-400 gap-3 hover:scale-105"
                    >
                      <BoxArrow /> More Info
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </section>
  )
}
