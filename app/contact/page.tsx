'use client'

import {
  ArrowIcon,
  DevIcon,
  EmailMe,
  GitHubIcon,
  LinkedinIcon
} from 'components/icons'

export const metadata = {
  name: 'Adam Gonzalez',
  description:
    'Adam Gonzalez Contact Information for various social media sites'
}

export default function ContactPage() {
  return (
    <section className="bg-white dark:bg-gray-900 border-2 dark:border-white border-black rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Get in touch
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        I&apos;m accessible on various platforms, and I&apos;d be delighted to
        hear from you. If you&apos;re interested in collaborating, please feel
        free to reach out to me via email. I look forward to connecting with
        you!
      </p>
      <div className="grid grid-cols-2 gap-4">
        <a
          className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-4 transition-colors"
          href="https://www.linkedin.com/in/adam-gonzalez-jr/"
        >
          <div className="flex items-center space-x-2">
            <LinkedinIcon />
            <span className="text-gray-900 dark:text-white">LinkedIn</span>
          </div>
          <ArrowIcon />
        </a>
        <a
          className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-4 transition-colors"
          href="https://github.com/adamgonzo"
        >
          <div className="flex items-center space-x-2">
            <GitHubIcon />
            <span className="text-gray-900 dark:text-white">GitHub</span>
          </div>
          <ArrowIcon />
        </a>
        <a
          className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-4 transition-colors"
          href="https://dev.to/megagon"
        >
          <div className="flex items-center space-x-2">
            <DevIcon />
            <span className="text-gray-900 dark:text-white">Dev.to</span>
          </div>
          <ArrowIcon />
        </a>

        <a
          href="mailto:AdamGonzalez-Jr@outlook.com?subject=collaboration"
          className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-4 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <EmailMe />
            <span className="text-gray-900 dark:text-white">Email me</span>
          </div>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
