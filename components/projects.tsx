'use client'
import React from 'react'
import Image from 'next/image'
//picture imports
import { GitHubIcon, BoxArrow, MongoDB, Github, Docker } from './icons'
import portfolioImg from '../lib/port.png'
import recipeGif from '../lib/recipe.gif'
import lashes from '../lib/lashes.png'
import BayCity from '../lib/BayCity.png'
import rbi from '../lib/rbi.png'
import { TypeScript, PythonLogo, ReactLogo, NextJs } from './icons'

export default function Projects() {
  return (
    <div className="flex-wrap">
      <div className="bg-gray-100 border-2 border-gray-200 dark:bg-gray-800 rounded-md shadow-lg p-6 dark:shadow-white shadow-black">
        <h1 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          👨‍💻 Skills and Tools
        </h1>
        <div className="grid grid-cols-auto-fit gap-8">
          <div className="border-2 border-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
              Techincal Skills
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center">
                <TypeScript />
                <h2 className="text-lg font-bold mt-2">TypeScript</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <PythonLogo />
                <h2 className="text-lg font-bold mt-2">Python</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ReactLogo />
                <h2 className="text-lg font-bold mt-2">React</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <NextJs />
                <h2 className="text-lg font-bold mt-2">Next.js</h2>
              </div>
            </div>
          </div>
          <div className="border-2 border-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
              Tools Used
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center">
                <MongoDB />
                <h2 className="text-lg font-bold mt-2">MongoDB</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Github />
                <h2 className="text-lg font-bold mt-2">Git</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Docker />
                <h2 className="text-lg font-bold mt-2">Docker</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="font-sans max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        id="projects-info"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 ">
          <article className="bg-white dark:bg-gray-800 overflow-hidden border border-gray-300 rounded-lg shadow-lg dark:shadow-white shadow-black">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-red-200  mb-4">
                Portfolio Website
              </h2>
              <div className="relative h-48">
                <Image src={portfolioImg} alt="Portfolio screenshot" />
              </div>
              <p className="mt-4 text-gray-700 dark:text-white">
                My portfolio website is an effective tool that highlights my
                skills, experience, and achievements as a developer. It is built
                using Next.js with TypeScript, which enables high performance
                and scalability. Additionally, I deployed it on Vercel to
                facilitate easy hosting. To display my latest articles, I
                leveraged the Dev.to API. Overall, my portfolio website
                showcases my passion for web development and delivering
                user-centric solutions.My portfolio website also includes a
                selection of projects that showcase my proficiency in using
                different programming languages, frameworks, and tools. Please
                take a visit and ceck it out
              </p>
              <a
                href="https://github.com/adamgonzo/portfolio"
                className="flex items-center mt-4 justify-start text-gray-700 dark:text-emerald-200 gap-3 hover:scale-105 hover:text-red-400"
              >
                <GitHubIcon />
                Source Code
              </a>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 overflow-hidden border border-gray-300 rounded-lg shadow-lg dark:shadow-white shadow-black">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-red-200 mb-4">
                Recipes in the terminal
              </h2>
              <div className="relative h-48">
                <Image
                  src={recipeGif}
                  height="300"
                  width="400"
                  alt="Recipe app animation"
                />
              </div>
              <p className="mt-4 text-gray-700 dark:text-white">
                I developed a Python app that enables users to search for an
                ingredient and retrieves the top 10 recipes from
                Spoonacular&apos;s API. It runs in the terminal, making it
                convenient for users who prefer command-line interfaces. The app
                is intuitive and easy to use, with a simple user interface that{' '}
                guides the user through the recipe search process. The recipes
                are displayed in a clear and concise format, making it easy for
                users to follow along. Overall, the app provides a streamlined
                and efficient way for users to search for recipes and explore
                new culinary experiences.
              </p>
              <a
                href="https://github.com/adamgonzo/Recipes_from_terminal"
                className=" flex items-center mt-4 justify-start text-gray-700 dark:text-emerald-200 hover:text-red-400 gap-3 hover:scale-105"
              >
                <GitHubIcon />
                Source Code
              </a>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 overflow-hidden border border-gray-300 rounded-lg shadow-lg dark:shadow-white shadow-black">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-red-200 mb-4">
                LashedByAlly
              </h2>
              <div className="relative h-48">
                <Image src={lashes} alt="LashesByAlly" />
              </div>
              <p className="mt-4 text-gray-700 dark:text-white">
                LashedUpAlly is a website built with React that showcases
                eyelash extensions done by Ally. The website features
                high-quality images of various eyelash styles, highlighting
                Ally&apos;s work and skill. In addition to displaying the
                portfolio, the website also provides contact information, making
                it easy for potential clients to schedule appointments or ask
                questions. With its simple yet effective design, LashedUyAlly
                offers an engaging and informative user experience that is both
                visually appealing and easy to navigate.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://LashedUpAlly.com"
                  className="flex items-center mt-4 text-gray-700 dark:text-emerald-200 hover:text-red-400 gap-3 hover:scale-105"
                >
                  <BoxArrow /> Visit Website
                </a>
                <a
                  href="google.com"
                  className="flex items-center mt-4 text-gray-700 dark:text-emerald-200 hover:text-red-400 gap-3 hover:scale-105"
                >
                  <GitHubIcon /> Source Code
                </a>
              </div>
            </div>
          </article>
          <article className="bg-white dark:bg-gray-800 overflow-hidden border boorder-gray-300 rounded-lg shadow-lg dark:shadow-white shadow-black">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-red-200 mb-4">
                Bay City General Glass
              </h2>
              <div className="relative h-48">
                <Image src={BayCity} alt="bay city" />
              </div>
              <p className="mt-4 text-gray-700 dark:text-white">
                a website for Bay City General Glass using React that showcases
                their portfolio of work through a gallery of images. Visitors to
                the site can easily submit a message to request a quote for
                their services. The project was particularly meaningful to me as
                Bay City General Glass was a company that had been serving the
                community for many years, and I was honored to be able to help
                them establish an online presence to reach a wider audience. By
                using React, I was able to create a user-friendly and responsive
                website that represents the company&apos;s values and commitment
                to quality workmanship.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://baycitygeneralglass.net"
                  className="flex items-center mt-4 dark:text-emerald-200 text-gray-700 hover:text-red-400 gap-3 hover:scale-105"
                >
                  <BoxArrow /> Visit website
                </a>
                <a
                  href="www.google.com"
                  className="flex items-center mt-4 dark:text-emerald-200 text-gray-700 hover:text-red-400 gap-3 hover:scale-105"
                >
                  <GitHubIcon /> Source Code
                </a>
              </div>
            </div>
          </article>
          <article className="bg-white dark:bg-gray-800 overflow-hidden border border-gray-300 rounded-lg shadow-lg dark:shadow-white shadow-black">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-red-200 mb-4">
                Rbi Softball
              </h2>
              <div className="relative h-48">
                <Image src={rbi} alt="rbi softball" />
              </div>
              <p className="mt-4 text-gray-700 dark:text-white">
                A website that is built with Next.js and backend using
                Planetscale using SQL that showcases stats for Rbi softball
                team. It displays players and their current stats while also
                allowing you to update each stats of each player. still need to
                add authentication so that not just anybody can go on and update
                the stats.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://rbi-softball.com"
                  className="flex items-center mt-4 dark:text-emerald-200 text-gray-700 hover:text-red-400 gap-3 hover:scale-y-105"
                >
                  <BoxArrow /> Visit Website
                </a>
                <a
                  href="https://github.com/adamgonzo/RBI-Softball"
                  className="flex items-center mt-4 dark:text-emerald-200 text-gray-700 hover:text-red-400 gap-3 hover:scale-y-105"
                >
                  <GitHubIcon /> Source Code
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
